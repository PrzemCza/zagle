import { Anchor, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-accent-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Anchor className="h-6 w-6" />
              <span className="text-lg font-bold">Sasanka 660 SN</span>
            </div>
            <p className="text-sm text-blue-100 leading-relaxed">
              Czarter jachtu Sasanka 660 SN na Jeziorsku. Barkowice Mokre, woj. łódzkie.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Nawigacja</h3>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Strona główna</Link>
              </li>
              <li>
                <Link href="/oferta" className="hover:text-white transition-colors">Oferta</Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-white transition-colors">Kontakt</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm text-blue-100">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+48 555 123 456</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>kontakt@omegasailing.pl</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>Barkowice Mokre<br />woj. łódzkie, Jeziorsko</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Godziny otwarcia</h3>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>Pon. – Czw.: czarter dobowy</li>
              <li>Pt. – Nd.: pakiet weekendowy</li>
            </ul>
            <p className="text-xs text-blue-200 mt-4">Kontakt: Mariusz</p>
          </div>
        </div>

        <div className="border-t border-blue-900 mt-8 pt-8 text-center text-xs text-blue-200">
          &copy; {new Date().getFullYear()} Sasanka 660 SN. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}
