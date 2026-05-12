"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    if (!name || !email || !message) {
      setError("Wypełnij wszystkie pola.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Nie udało się wysłać wiadomości.");
        return;
      }

      setSent(true);
    } catch {
      setError("Błąd połączenia. Spróbuj ponownie.");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="mt-4 px-4 py-3 rounded-lg bg-green-50 text-sm text-green-700 font-medium">
        Dziękujemy za wiadomość! Odpowiemy najszybciej jak możliwe.
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {error && (
        <div className="px-4 py-2 rounded-lg bg-red-50 text-sm text-red-700">
          {error}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs text-gray-500 mb-1">Imię i nazwisko</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none"
            placeholder="Jan Kowalski"
          />
        </div>
        <div>
          <label htmlFor="email-cf" className="block text-xs text-gray-500 mb-1">E-mail</label>
          <input
            id="email-cf"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none"
            placeholder="jan@email.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-xs text-gray-500 mb-1">Wiadomość</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none"
          placeholder="Kiedy planujesz rejs? W ile osób?"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="px-6 py-2.5 bg-accent text-white text-sm font-semibold rounded-full hover:bg-accent-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Wysyłanie..." : "Wyślij wiadomość"}
      </button>
    </form>
  );
}
