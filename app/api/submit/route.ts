import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    fetch("http://localhost:3001/api/portfolio", {
      method: "POST",
      body: JSON.stringify({
        request,
      }),
      headers: {
        "content-type": "application/json",
      },
    }).catch((e) => console.log(e));
  } catch (error) {}
  const data = "Salud!!";

  return Response.json(data);
}
