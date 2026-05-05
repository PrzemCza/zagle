export default function CtaSection() {
  return (
    <section className="relative py-16 sm:py-20 bg-accent overflow-hidden">
      {/* Decorative shape */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-200 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
          Chcesz zarezerwować Sasankę 660 SN?
        </h2>
        <p className="text-sm sm:text-base text-blue-100 mb-8 leading-relaxed">
          Barkowice Mokre, Zalew Sulejowski. Zadzwoń i sprawdź dostępny termin.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+48503943226"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-accent-dark text-sm font-semibold rounded-full hover:bg-sky-50 transition-colors shadow-lg"
          >
            Zadzwoń
          </a>
          <a
            href="mailto:bezulski@gmail.com"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-white/40 text-white text-sm font-semibold rounded-full hover:bg-white/10 transition-colors"
          >
            Napisz e-mail
          </a>
        </div>
      </div>
    </section>
  );
}
