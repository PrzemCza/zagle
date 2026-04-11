import { Check, Ruler, Users, Wind, Weight, Gauge, Anchor, Phone, Mail } from "lucide-react";
import { IMAGES } from "@/lib/images";

const specs = [
  { icon: <Ruler className="h-5 w-5" />, label: "Długość całkowita", value: "6,20 m" },
  { icon: <Ruler className="h-5 w-5" />, label: "Szerokość", value: "1,80 m" },
  { icon: <Wind className="h-5 w-5" />, label: "Powierzchnia żagli", value: "~15 m²" },
  { icon: <Users className="h-5 w-5" />, label: "Max. załoga", value: "6 osób" },
  { icon: <Weight className="h-5 w-5" />, label: "Masa miecza", value: "30 kg" },
  { icon: <Gauge className="h-5 w-5" />, label: "Silnik zaburtowy", value: "2 KM" },
  { icon: <Anchor className="h-5 w-5" />, label: "Typ kadłuba", value: "Laminat szklano-poliestrowy" },
];

const included = [
  "Kompletny sprzęt bezpieczeństwa (kamizelki, apteczka)",
  "Żagle w dobrym stanie (grot, fok)",
  "Miecz obrotowy – płytkie zanurzenie",
  "Silnik zaburtowy 2 KM na slupraku",
  "Pady wiosłowe",
  "Krótki instruktaż przed każdym wypłynięciem",
  "Ubezpieczenie OC",
  "Mapa jeziora i opis szlaków",
];

const pricing = [
  {
    label: "Wynajem jednodniowy",
    price: "350 zł",
    desc: "Idealny na próbę. 6–8 godzin żeglugi.",
    popular: false,
  },
  {
    label: "Wynajem tygodniowy",
    price: "1 800 zł",
    desc: "Tydzień (7 dni) na jeziorze. Najpopularniejsza opcja.",
    popular: true,
  },
  {
    label: "Pół dnia (4 h)",
    price: "200 zł",
    desc: "Idealne na popołudniowy spacer żeglarski.",
    popular: false,
  },
];

export default function OfferPage() {
  return (
    <div className="pb-16">
      {/* Hero */}
      <section className="bg-sky-50 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-4 block">
            Flota
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Żaglówka <span className="text-accent">Omega</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Kultowa polska żaglówka szkoleniowa, która od lat 60. pływa po jeziorach. Lekka, bezpieczna i&nbsp;nieprzewracająca się – idealna na&nbsp;rodzinne rejsy po Jeziorze Śniardwy.
          </p>
        </div>
      </section>

      {/* Specs */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-10">Dane techniczne</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specs.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-4 rounded-2xl bg-sky-50 px-5 py-5"
              >
                <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-accent shrink-0">
                  {s.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-500">{s.label}</p>
                  <p className="text-base font-semibold text-gray-900">{s.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional info */}
          <div className="mt-10 prose prose-sm max-w-none text-gray-600 space-y-3 text-sm leading-relaxed">
            <p>
              <strong>Konstrukcja:</strong> Kadłub z laminatu poliestrowo-szklanego. Płaskodenny kadłub ułatwia pływanie przy silnym wietrze.
            </p>
            <p>
              <strong>Bezpieczeństwo:</strong> Dzięki dużemu balastowi i&nbsp;szerokości Omega ma bardzo trudne wychylenie – praktycznie niemożliwe do&nbsp;wywrócenia.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-10">Cena obejmuje</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 sm:py-16 bg-sky-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-10">Cennik</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pricing.map((p) => (
              <div
                key={p.label}
                className={`rounded-2xl px-8 py-8 text-center ${
                  p.popular
                    ? "bg-accent-dark text-white shadow-xl shadow-accent-dark/30 ring-2 ring-accent-dark"
                    : "bg-white shadow-sm"
                }`}
              >
                {p.popular && (
                  <span className="inline-block py-1 px-3 bg-white/20 text-xs font-semibold rounded-full mb-3">
                    Najpopularniejsze
                  </span>
                )}
                <h3
                  className={`text-base font-semibold mb-1 ${
                    p.popular ? "text-white" : "text-gray-900"
                  }`}
                >
                  {p.label}
                </h3>
                <div
                  className={`text-3xl font-extrabold my-4 ${
                    p.popular ? "text-white" : "text-accent-dark"
                  }`}
                >
                  {p.price}
                </div>
                <p className={`text-xs ${p.popular ? "text-blue-100" : "text-gray-500"}`}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-10">Galeria</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {IMAGES.offer.map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden aspect-square shadow">
                <img
                  src={src}
                  alt={`Galeria ${i + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <h3 className="text-xl font-extrabold text-gray-900 mb-3">Chcesz pożyczyć żaglówkę?</h3>
          <p className="text-sm text-gray-500 mb-6">
            Skontaktuj się z nami – ustalamy dogodny termin i&nbsp;szereg zasad na&nbsp;miejscu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+48555123456"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white rounded-full text-sm font-semibold hover:bg-accent-dark transition-colors"
            >
              <Phone className="h-4 w-4" /> Zadzwoń
            </a>
            <a
              href="mailto:kontakt@omegasailing.pl"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-accent text-accent rounded-full text-sm font-semibold hover:bg-accent/10 transition-colors"
            >
              <Mail className="h-4 w-4" /> Napisz e-mail
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}