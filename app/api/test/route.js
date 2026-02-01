import clientPromise from "@/app/Lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();
    const client = await clientPromise;
    const db = client.db("HomeCleaningDB"); // This creates the DB on the fly!

    const result = await db.collection("users").insertOne({
      name,
      email,
      password, // Reminder: Hash this for real projects!
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, id: result.insertedId });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}