import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

const COLLECTION = "contact_submissions";

export type ContactBody = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

function validate(body: unknown): body is ContactBody {
  return (
    typeof body === "object" &&
    body !== null &&
    "name" in body &&
    typeof (body as ContactBody).name === "string" &&
    (body as ContactBody).name.trim().length > 0 &&
    "phone" in body &&
    typeof (body as ContactBody).phone === "string" &&
    (body as ContactBody).phone.trim().length > 0
  );
}

/** Normalize phone to digits only for duplicate check */
function normalizePhone(phone: string): string {
  return phone.replace(/\D/g, "");
}

/** Normalize email for duplicate check */
function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export async function POST(request: Request) {
  if (!process.env.MONGODB_URI) {
    return NextResponse.json(
      { error: "Server misconfiguration: MONGODB_URI is not set." },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  if (!validate(body)) {
    return NextResponse.json(
      { error: "Missing or invalid fields: name and phone are required." },
      { status: 400 }
    );
  }

  const name = (body.name as string).trim();
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = (body.phone as string).trim();
  const subject = typeof body.subject === "string" ? body.subject.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  const doc = {
    name,
    email,
    phone,
    subject,
    message,
    createdAt: new Date(),
  };

  try {
    const db = await getDb();
    const collection = db.collection(COLLECTION);

    const phoneDigits = normalizePhone(phone);
    const emailNorm = email.length > 0 ? normalizeEmail(email) : null;

    const existing = await collection.find({}).toArray();
    if (phoneDigits.length > 0) {
      const duplicateByPhone = existing.some(
        (row) => normalizePhone(String(row.phone ?? "")) === phoneDigits
      );
      if (duplicateByPhone) {
        return NextResponse.json(
          { error: "A submission with this phone number already exists." },
          { status: 409 }
        );
      }
    }
    if (emailNorm !== null) {
      const duplicateByEmail = existing.some(
        (row) => normalizeEmail(String(row.email ?? "")) === emailNorm
      );
      if (duplicateByEmail) {
        return NextResponse.json(
          { error: "A submission with this email already exists." },
          { status: 409 }
        );
      }
    }

    await collection.insertOne(doc);
    return NextResponse.json({ success: true });
  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      console.error("Contact form MongoDB error:", err);
    }
    return NextResponse.json(
      { error: "Failed to save your message. Please try again or contact us by phone." },
      { status: 500 }
    );
  }
}
