"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  RefreshCw,
  Mail,
  Phone,
  AlertCircle,
} from "lucide-react";

type Submission = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
};

const subjectLabels: Record<string, string> = {
  "": "—",
  "product-inquiry": "Product Inquiry",
  "quote-request": "Quote Request",
  support: "Support",
  other: "Other",
};

function formatDate(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  } catch {
    return iso;
  }
}

export default function AdminPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSubmissions = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/contact-submissions");
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to load submissions");
      }
      const data = await res.json();
      setSubmissions(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setSubmissions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pt-8 pb-16">
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary-red/10 flex items-center justify-center">
              <MessageSquare className="text-primary-red" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary-black">
                Contact Submissions
              </h1>
              <p className="text-sm text-gray-600">
                {submissions.length} submission{submissions.length !== 1 ? "s" : ""} in MongoDB
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={fetchSubmissions}
            disabled={loading}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 disabled:opacity-60 transition-colors"
          >
            <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
            Refresh
          </button>
        </motion.header>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 flex items-center gap-3 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-700"
            role="alert"
          >
            <AlertCircle size={20} />
            <span>{error}</span>
          </motion.div>
        )}

        {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-xl bg-white border border-gray-200 shadow-sm p-12 text-center text-gray-500"
          >
            <RefreshCw size={40} className="mx-auto mb-4 animate-spin text-primary-red" />
            <p>Loading submissions…</p>
          </motion.div>
        ) : submissions.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-xl bg-white border border-gray-200 shadow-sm p-12 text-center text-gray-500"
          >
            <MessageSquare size={48} className="mx-auto mb-4 text-gray-300" />
            <p className="font-medium">No submissions yet</p>
            <p className="text-sm mt-1">Contact form entries will appear here.</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl bg-white border border-gray-200 shadow-sm overflow-hidden"
          >
            <table className="w-full text-sm md:text-base border-collapse table-fixed">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th
                    scope="col"
                    className="px-2 py-3 text-left font-semibold text-primary-black border border-gray-200 w-[4%]"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left font-semibold text-primary-black border border-gray-200 w-[12%]"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left font-semibold text-primary-black border border-gray-200 w-[18%]"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left font-semibold text-primary-black border border-gray-200 w-[12%]"
                  >
                    Phone
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left font-semibold text-primary-black border border-gray-200 w-[11%]"
                  >
                    Subject
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left font-semibold text-primary-black border border-gray-200 w-[23%]"
                  >
                    Message
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left font-semibold text-primary-black border border-gray-200 w-[20%]"
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((row, index) => (
                  <tr
                    key={row._id}
                    className="odd:bg-white even:bg-gray-50/50 align-top"
                  >
                    <td className="px-2 py-3 font-medium text-gray-600 border border-gray-200">
                      {index + 1}
                    </td>
                    <td className="px-2 py-3 text-primary-black border border-gray-200 break-words">
                      <span className="font-medium">{row.name}</span>
                    </td>
                    <td className="px-2 py-3 text-gray-700 border border-gray-200 align-middle">
                      {row.email ? (
                        <a
                          href={`mailto:${row.email}`}
                          title={row.email}
                          className="text-primary-red hover:underline inline-flex items-center gap-1 min-w-0 max-w-full"
                        >
                          <Mail size={14} className="flex-shrink-0" />
                          <span className="truncate block min-w-0" title={row.email}>
                            {row.email}
                          </span>
                        </a>
                      ) : (
                        "—"
                      )}
                    </td>
                    <td className="px-2 py-3 text-gray-700 border border-gray-200 break-words">
                      {row.phone ? (
                        <a
                          href={`tel:${row.phone.replace(/\s/g, "")}`}
                          className="text-primary-red hover:underline inline-flex items-center gap-1"
                        >
                          <Phone size={14} className="flex-shrink-0" />
                          {row.phone}
                        </a>
                      ) : (
                        "—"
                      )}
                    </td>
                    <td className="px-2 py-3 text-gray-700 border border-gray-200 break-words">
                      {subjectLabels[row.subject] ?? (row.subject || "—")}
                    </td>
                    <td className="px-2 py-3 text-gray-700 border border-gray-200 align-top whitespace-pre-wrap break-words min-w-0">
                      {row.message || "—"}
                    </td>
                    <td className="px-2 py-3 text-gray-600 border border-gray-200 whitespace-nowrap">
                      {formatDate(row.createdAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}

        <p className="mt-6 text-center text-xs text-gray-500">
          This page is not linked from the site. Keep the URL private.
        </p>
      </div>
    </div>
  );
}
