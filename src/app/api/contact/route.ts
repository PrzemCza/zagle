import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Funkcja kontaktowa jest tymczasowo wyłączona." },
        { status: 503 }
      );
    }

    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    const TO_EMAIL = process.env.CONTACT_EMAIL || "bezulski@gmail.com";

    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Wszystkie pola są wymagane." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: `Formularz kontaktowy <onboarding@resend.dev>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Nowa wiadomość od ${name}`,
      text: `Imię i nazwisko: ${name}\nEmail: ${email}\n\nWiadomość:\n${message}`,
    });

    if (error) {
      return NextResponse.json(
        { error: "Nie udało się wysłać wiadomości." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Wystąpił błąd serwera." },
      { status: 500 }
    );
  }
}
