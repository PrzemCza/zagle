import { ArrowRight, Users, Ruler, Wind } from "lucide-react";
import Link from "next/link";
import { IMAGES } from "@/lib/images";

export default function BoatPreview() {
  return (
    <section id="oferta" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
            <img
              src={IMAGES.preview}
              alt="Jacht Sasanka 660 SN"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Info */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">
              Nasz jacht
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Sasanka 660 SN
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              6,6-metrowy jacht turystyczny z mieczem obrotowym i silnikiem zaburtowym.
              Wygodny dla 4-6 osób, idealny na Zalew Sulejowski.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="flex flex-col items-center rounded-xl bg-sky-50 p-4">
                <Ruler className="h-5 w-5 text-accent mb-2" />
                <span className="text-lg font-bold text-gray-900">6,60&nbsp;m</span>
                <span className="text-xs text-gray-500">Długość</span>
              </div>
              <div className="flex flex-col items-center rounded-xl bg-sky-50 p-4">
                <Users className="h-5 w-5 text-accent mb-2" />
                <span className="text-lg font-bold text-gray-900">6</span>
                <span className="text-xs text-gray-500">Koi</span>
              </div>
              <div className="flex flex-col items-center rounded-xl bg-sky-50 p-4">
                <Wind className="h-5 w-5 text-accent mb-2" />
                <span className="text-lg font-bold text-gray-900">20-22&nbsp;m²</span>
                <span className="text-xs text-gray-500">Żagle</span>
              </div>
            </div>

            <Link
              href="/oferta"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark transition-colors group"
            >
              Szczegółowa oferta
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
