import { NextResponse } from "next/server";
import { Resend } from "resend";
import { profile } from "@/data/resume";
import { supabase } from "@/lib/supabaseClient";
import { Buffer } from "node:buffer";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Simple email regex (RFC-style)
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_ATTACHMENT_BYTES = 100 * 1024 * 1024; // 100 MB per file
const MAX_ATTACHMENTS_TOTAL_BYTES = 300 * 1024 * 1024; // 300 MB total

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const topic = formData.get("topic");
    const attachments = formData.getAll("attachment");

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }
    const trimmedEmail = email.trim().toLowerCase();
    if (!EMAIL_REGEX.test(trimmedEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }
    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const validFiles = attachments.filter((a): a is File => a instanceof File && a.size > 0);
    const totalBytes = validFiles.reduce((sum, f) => sum + f.size, 0);
    if (validFiles.some((f) => f.size > MAX_ATTACHMENT_BYTES)) {
      return NextResponse.json(
        { error: "Each attachment must be 100 MB or smaller." },
        { status: 400 }
      );
    }
    if (totalBytes > MAX_ATTACHMENTS_TOTAL_BYTES) {
      return NextResponse.json(
        { error: "Total attachments must be 300 MB or smaller." },
        { status: 400 }
      );
    }

    const attachmentParts =
      validFiles.length > 0
        ? await Promise.all(
            validFiles.map(async (f) => {
              const arrayBuffer = await f.arrayBuffer();
              return {
                filename: f.name,
                content: Buffer.from(arrayBuffer),
              };
            })
          )
        : undefined;

    if (!resend) {
      console.error("RESEND_API_KEY is not set.");
      return NextResponse.json(
        { error: "Contact form is not configured. Please try again later." },
        { status: 503 }
      );
    }

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM ?? "Portfolio <onboarding@resend.dev>",
      to: profile.email,
      replyTo: trimmedEmail,
      subject: `Portfolio contact from ${name.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${trimmedEmail}\nReason: ${
        typeof topic === "string" && topic.trim() ? topic.trim() : "project"
      }\n\nMessage:\n${message.trim()}\n\n${
        attachmentParts?.length
          ? `Attachments: ${attachmentParts.map((a) => a.filename).join(", ")}`
          : "Attachments: none"
      }`,
      attachments: attachmentParts,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    // Best-effort: store contact message in Supabase if configured.
    if (supabase) {
      const { error: dbError } = await supabase.from("contact_messages").insert({
        name: name.trim(),
        email: trimmedEmail,
        topic: typeof topic === "string" && topic.trim() ? topic.trim() : "project",
        message: message.trim(),
        attachments: validFiles.map((f) => f.name),
      });

      if (dbError) {
        console.error("Supabase insert error (contact_messages):", dbError);
      }
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Contact API error:", e);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
