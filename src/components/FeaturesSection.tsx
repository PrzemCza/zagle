import { Shield, SailboatIcon, Map, Clock } from "lucide-react";

const features = [
  {
    icon: <Shield className="h-7 w-7" />,
    title: "Bezpieczeństwo",
    desc: "Łódź w pełni wyposażona w sprzęt ratunkowy i&nbsp;ubezpieczenie OC.",
  },
  {
    icon: <SailboatIcon className="h-7 w-7" />,
    title: "Łatwa obsługa",
    desc: "Omega to prosta i stabilna jednostka – poradzisz sobie nawet bez patentu.",
  },
  {
    icon: <Map className="h-7 w-7" />,
    title: "Piękne trasy",
    desc: "Jezioro Śniardwy i Krainy Wielkich Jezior Mazurskich – setki kilometrów dróg wodnych.",
  },
  {
    icon: <Clock className="h-7 w-7" />,
    title: "Elastyczny wynajem",
    desc: "Wypożycz na kilka godzin lub cały dzień – dopasuję ofertę do Twoich potrzeb.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 sm:py-20 bg-sky-50" id="dlaczego-my">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">Dlaczego my</h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Żegluj spokojnie i&nbsp;bezpiecznie
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl bg-white px-6 py-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center text-accent mb-5">
                {f.icon}
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
