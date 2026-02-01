import clientPromise from "../../../Lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { serviceName, duration, basePrice, status } = await request.json();
    const client = await clientPromise;
    const db = client.db("HomeCleaningDB");

    const newService = await db.collection("services").insertOne({
      serviceName,
      duration, // e.g., "2 hours"
      basePrice: Number(basePrice), // Ensures price is a number
      status, // "active" or "inactive"
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "Service Added!", id: newService.insertedId });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}