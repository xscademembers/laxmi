import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

const COLLECTION = "contact_submissions";

export type ContactSubmission = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
};

export async function GET() {
  if (!process.env.MONGODB_URI) {
    return NextResponse.json(
      { error: "Server misconfiguration: MONGODB_URI is not set." },
      { status: 500 }
    );
  }

  try {
    const db = await getDb();
    const collection = db.collection(COLLECTION);
    const cursor = collection.find({}).sort({ createdAt: -1 });
    const rows = await cursor.toArray();

    const submissions: ContactSubmission[] = rows.map((row) => ({
      _id: String(row._id),
      name: String(row.name ?? ""),
      email: String(row.email ?? ""),
      phone: String(row.phone ?? ""),
      subject: String(row.subject ?? ""),
      message: String(row.message ?? ""),
      createdAt:
        row.createdAt instanceof Date
          ? row.createdAt.toISOString()
          : String(row.createdAt ?? ""),
    }));

    return NextResponse.json(submissions);
  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      console.error("Admin contact submissions error:", err);
    }
    return NextResponse.json(
      { error: "Failed to load submissions." },
      { status: 500 }
    );
  }
}
