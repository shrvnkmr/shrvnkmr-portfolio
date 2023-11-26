import React from "react";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import EmailTemplate from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const requestBody = await request.json();
  const { name, email, subject, message } = requestBody;
  try {
    const { data, error } = await resend.emails.send({
      from: `${name} <portfolio.enquiry@resend.dev>`,
      to: [process.env.SOURCE_EMAIL || ""],
      subject: subject,
      react: EmailTemplate({
        name: name,
        email: email,
        subject: subject,
        message: message,
      }) as React.ReactElement,
    });
    if (error) {
      return NextResponse.json({ error });
    }
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
