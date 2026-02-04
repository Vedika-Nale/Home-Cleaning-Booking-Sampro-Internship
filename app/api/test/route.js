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

export async function POST(request) {
  try {
    const body = await request.json();

    // Basic validation - ensure at least one field is provided
    if (!body || Object.keys(body).length === 0) {
      return NextResponse.json({ error: "Request body is empty" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("HomeCleaningDB");

    // Insert into a `users` collection (adjust collection name as needed)
    const result = await db.collection("users").insertOne(body);

    return NextResponse.json({ insertedId: result.insertedId }, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: "Error", message: e.message }, { status: 500 });
  }
}