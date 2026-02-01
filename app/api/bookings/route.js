import clientPromise from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body || !body.fullName || !body.address) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // validate preferredDate if provided
    let preferredDateObj = null;
    if (body.preferredDate) {
      const d = new Date(body.preferredDate);
      if (isNaN(d.getTime())) {
        return NextResponse.json({ message: "Invalid preferredDate" }, { status: 400 });
      }
      preferredDateObj = d;
    }

    const client = await clientPromise;
    const db = client.db("HomeCleaningDB");

    const doc = {
      fullName: body.fullName,
      address: body.address,
      description: body.description || "",
      service: body.service || "",
      apartmentType: body.apartmentType || "",
      slot: body.slot || "",
      paymentOption: body.paymentOption || "",
      preferredDate: preferredDateObj,
      preferredDay: body.preferredDay || "",
      status: "pending",
      createdAt: new Date(),
    };

    const result = await db.collection("bookings").insertOne(doc);

    return NextResponse.json({ insertedId: result.insertedId }, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("HomeCleaningDB");

    const list = await db.collection("bookings").find({}).sort({ createdAt: -1 }).limit(50).toArray();

    return NextResponse.json({ bookings: list });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}
