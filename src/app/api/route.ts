import { NextResponse } from "next/server";

// Example API route with GET, POST, PUT, DELETE methods

// Example GET handler https://localhost:3000/api
export async function GET() {
  return NextResponse.json({ message: "API Running with GET" });
}

// Example POST handler https://localhost:3000/api  
export async function POST() {
  return NextResponse.json({ message: "API Running with POST" });
}

// Example PUT handler https://localhost:3000/api
export async function PUT() {
  return NextResponse.json({ message: "API Running with PUT" });
}

// Example DELETE handler https://localhost:3000/api
export async function DELETE() {
  return NextResponse.json({ message: "Delete request received" });
}