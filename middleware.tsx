import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";

export default async function middleware(req: NextRequest, res: NextResponse) {
  console.log("req here in middleware => ", req);
  const bearer = req.headers.get("authorization") as string;

  if (!bearer) {
    return new NextResponse(
      JSON.stringify({ error: "No Authorization header was found" }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }

  const token = bearer.split(" ")[1];

  if (!token) {
    return new NextResponse(JSON.stringify({ error: "No token was found" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const secereKey = new TextEncoder().encode(process.env.JWT_SECRET);

  try {
    await jose.jwtVerify(token, secereKey);
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: "Invalid token" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export const config = {
  matcher: ["/api/auth/verify"],
};
