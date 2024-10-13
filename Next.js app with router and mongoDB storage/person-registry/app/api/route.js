import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const DB_URI = "mongodb://mongo:27017";
const client = new MongoClient(DB_URI);

export async function POST(request) {
  try {
    await client.connect();
    const db = client.db("onm4ss24a8");
    const body = await request.json();
    const result = await db.collection("s2210238081").insertOne(body);
    return NextResponse.json({ id: result.insertedId });
  } catch (error) {
    console.error( error);
    
  } finally {
    await client.close();
  }
}

export async function GET() {
  try {
    await client.connect();
    const db = client.db("onm4ss24a8");
    const entries = await db.collection("s2210238081").find().toArray();
    return NextResponse.json(entries);
  } catch (error) {
    console.error(error);
    
  } finally {
    await client.close();
  }
}
