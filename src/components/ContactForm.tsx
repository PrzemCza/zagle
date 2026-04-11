"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder – w przyszłości można podłączyć backend / e-mail API
    setSent(true);
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs text-gray-500 mb-1">Imię i nazwisko</label>
          <input
            id="name"
            name="name"
            type="text"
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
          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none"
          placeholder="Kiedy planujesz rejs? W ile osób?"
        />
      </div>
      <button
        type="submit"
        className="px-6 py-2.5 bg-accent text-white text-sm font-semibold rounded-full hover:bg-accent-dark transition-colors"
      >
        Wyślij wiadomość
      </button>
    </form>
  );
}
