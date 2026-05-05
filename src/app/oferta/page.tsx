import { Check, Ruler, Users, Wind, Weight, Phone } from "lucide-react";
import { IMAGES } from "@/lib/images";

const specs = [
  { icon: <Ruler className="h-5 w-5" />, label: "Długość całkowita", value: "6,60 m" },
  { icon: <Ruler className="h-5 w-5" />, label: "Szerokość całkowita", value: "2,45-2,50 m" },
  { icon: <Weight className="h-5 w-5" />, label: "Zanurzenie min/max", value: "0,33 m / 1,20-1,40 m" },
  { icon: <Ruler className="h-5 w-5" />, label: "Wysokość w kabinie", value: "~1,60-1,65 m" },
  { icon: <Wind className="h-5 w-5" />, label: "Powierzchnia żagli", value: "~20-22 m²" },
  { icon: <Users className="h-5 w-5" />, label: "Liczba koi", value: "6 (4+2 lub 5+1)" },
  { icon: <Weight className="h-5 w-5" />, label: "Balast / miecz", value: "~250 kg / 70 kg" },
  { icon: <Ruler className="h-5 w-5" />, label: "Wysokość masztu", value: "8-8,5 m" },
];

const included = [
  "Silnik Mercury 4 KM",
  "Miecz uchylny / obrotowy",
  "Lazyjack, grot na pełzaczach z możliwością refowania",
  "Fok rolowany, wszystkie fały sprowadzone do kokpitu",
  "Instalacja 12V + podwójny port USB",
  "Kotwica, cumy, pagaje, bosak, kapoki",
  "Głośnik bluetooth",
  "Kuchenka gazowa, gaśnica, apteczka",
  "Stolik do kokpitu, talerze, naczynia i sztućce",
  "Poduszki, koce, opcjonalna toaleta chemiczna",
  "Ubezpieczenie OC",
];

const pricing = [
  {
    label: "Doba w tygodniu",
    price: "200 PLN",
    desc: "Cena za dobę od poniedziałku do czwartku.",
    popular: false,
  },
  {
    label: "Weekend",
    price: "600 PLN",
    desc: "Od piątku do niedzieli.",
    popular: true,
  },
  {
    label: "Dłuższy czarter",
    price: "Do ustalenia",
    desc: "Możliwość negocjacji ceny przy dłuższym czarterze.",
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
            Oferta
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Jacht <span className="text-accent">Sasanka 660 SN</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Turystyczny jacht żaglowy dla 4-6 osób. Baza: Barkowice Mokre, woj. łódzkie, Zalew Sulejowski.
          </p>
        </div>
      </section>

      {/* Specs */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-10">Dane techniczne</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
              <strong>Miecz:</strong> obrotowy/uchylny, wygodne podejście do płytszych miejsc.
            </p>
            <p>
              <strong>Wnętrze:</strong> wyposażenie na kilkudniowy pobyt w pełni zapewniające komfort i wygodę.
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
            <h3 className="text-xl font-extrabold text-gray-900 mb-3">Chcesz wyczarterować jacht?</h3>
          <p className="text-sm text-gray-500 mb-6">
              Zadzwoń lub napisz i ustal dogodny termin czarteru.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+48503943226"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white rounded-full text-sm font-semibold hover:bg-accent-dark transition-colors"
            >
              <Phone className="h-4 w-4" /> Zadzwoń: 503 943 226
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}