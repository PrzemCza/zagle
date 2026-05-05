import { Phone, Mail, MapPin, CalendarDays } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="pb-16">
      {/* Intro */}
      <section className="bg-sky-50 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            Kontakt
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Skontaktuj się z&nbsp;nami
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
            Zadzwoń lub napisz i sprawdź dostępność jachtu Sasanka 660 SN.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-8">Dane kontaktowe</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-accent-light flex items-center justify-center text-accent shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Telefon</p>
                    <a href="tel:+48503943226" className="text-gray-900 font-semibold hover:text-accent transition-colors text-lg">
                      503 943 226
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-accent-light flex items-center justify-center text-accent shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">E-mail</p>
                    <a
                      href="mailto:bezulski@gmail.com"
                      className="text-gray-900 font-semibold hover:text-accent transition-colors"
                    >
                      bezulski@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-accent-light flex items-center justify-center text-accent shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Lokalizacja</p>
                    <p className="text-gray-700">Barkowice Mokre<br />woj. łódzkie, Zalew Sulejowski</p>
                    <p className="text-xs text-gray-400 mt-1">Port na Cyplu</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-accent-light flex items-center justify-center text-accent shrink-0">
                    <CalendarDays className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Sezon</p>
                    <p className="text-gray-700">Czarter po wcześniejszym uzgodnieniu</p>
                    <p className="text-xs text-gray-400 mt-1">Port na Cyplu</p>
                  </div>
                </div>
              </div>

              {/* Quick contact form */}
              <div className="mt-12 rounded-2xl bg-sky-50 p-6 sm:p-8">
                <h3 className="text-base font-semibold text-gray-900 mb-4">Formularz kontaktowy</h3>
                <ContactForm />
              </div>
            </div>

            {/* Map column */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-8">Jak trafić do przystani</h2>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  title="Lokalizacja przystani"
                  className="w-full h-[400px] lg:h-full min-h-[400px]"
                  src="https://maps.google.com/maps?q=Barkowice%20Mokre&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-6 rounded-xl bg-sky-50 p-6 text-sm text-gray-600">
                <p className="font-semibold text-gray-800 text-base mb-2">Dojazd</p>
                <ul className="space-y-2">
                  <li>
                    <strong>Samochodem:</strong> Dojazd do Barkowic Mokrych, port na Cyplu.
                  </li>
                  <li>
                    <strong>Na miejscu:</strong> Wydanie i zwrot jachtu po wcześniejszym kontakcie.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
