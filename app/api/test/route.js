import clientPromise from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("HomeCleaningDB");

    // This command asks MongoDB for its status
    await db.command({ ping: 1 });

    return NextResponse.json({ 
      status: "Connected!", 
      database: "HomeCleaningDB" 
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ 
      status: "Error", 
      message: e.message 
    }, { status: 500 });
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