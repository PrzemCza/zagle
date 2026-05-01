import { IMAGES } from "@/lib/images";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('${IMAGES.hero}')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      <div className="relative z-10 text-center max-w-3xl px-4 sm:px-6">
        <span className="inline-block py-1.5 px-4 border border-white/40 rounded-full text-xs font-medium tracking-widest uppercase text-white/90 mb-4 backdrop-blur-sm">
          Jeziorsko &bull; Barkowice Mokre
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
          Czarter jachtu <span className="text-sky-300">Sasanka 660 SN</span>
        </h1>
        <p className="text-base sm:text-lg text-white/85 leading-relaxed mb-10 max-w-2xl mx-auto">
          Turystyczny jacht żaglowy dla 4-6 osób, łatwy w obsłudze i gotowy na kilkudniowe rejsy po Jeziorsku.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#oferta"
            className="inline-flex items-center justify-center px-8 py-3.5 border-0 rounded-full bg-sky-600 text-white text-sm font-semibold tracking-wide shadow-lg shadow-sky-700/30 hover:bg-sky-500 transition-colors"
          >
            Sprawdź ofertę
          </a>
          <a
            href="tel:+48555123456"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-white/40 rounded-full text-white text-sm font-semibold tracking-wide hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            Kontakt: Mariusz
          </a>
        </div>
      </div>
    </section>
  );
}
