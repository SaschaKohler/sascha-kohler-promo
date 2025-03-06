// app/api/newsletter-signup/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;
    const webhookurl = process.env.MAKE_WEBHOOK_URL;

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email ist erforderlich" },
        { status: 400 },
      );
    }

    // Validiere Email-Format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Ungültiges Email-Format" },
        { status: 400 },
      );
    }

    // E-Mail an Make.com Webhook senden
    try {
      const response = await fetch(
        // "https://hook.eu2.make.com/cpcfe88m1c657r7qs3osjdfkp97nfnno",
        webhookurl,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            source: "website-newsletter",
            timestamp: new Date().toISOString(),
            // Optionale zusätzliche Informationen, die Sie erfassen möchten
            metadata: {
              page: "launch-page",
            },
          }),
        },
      );

      if (!response.ok) {
        console.error("Webhook response status:", response.status);
        throw new Error("Newsletter service returned an error");
      }

      // Optionale Verarbeitung der Antwort
      const responseData = await response.json().catch(() => ({}));
      console.log("Newsletter signup successful:", email);

      // Erfolgsmeldung
      return NextResponse.json({
        success: true,
        message: "Vielen Dank für Ihre Anmeldung!",
      });
    } catch (error) {
      console.error("Error sending to newsletter service:", error);
      return NextResponse.json(
        {
          success: false,
          message: "Fehler bei der Verbindung zum Newsletter-Dienst",
        },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error("Newsletter signup error:", error);
    return NextResponse.json(
      { success: false, message: "Serverfehler" },
      { status: 500 },
    );
  }
}
