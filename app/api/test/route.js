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