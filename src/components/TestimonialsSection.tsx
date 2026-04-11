const testimonials = [
  {
    name: "Kasia & Michał",
    loc: "Warszawa",
    text: "Spędziliśmy fantastyczny weekend na Śniardwach. Łódź w&nbsp;świetnym stanie, a&nbsp;panowie wszystko dokładnie wytłumaczyli przed wypłynięciem!",
    rating: 5,
  },
  {
    name: "Rodzina Nowaków",
    loc: "Kraków",
    text: "Dzieci były zachwycone. Omega jest stabilna – nawet 8-latek mógł sterować. Na&nbsp;pewno wrócimy w&nbsp;przyszłym roku.",
    rating: 5,
  },
  {
    name: "Tomek",
    loc: "Gdańsk",
    text: "Wypożyczyłem na tydzień. Trasa Mikołajki &rarr; Śniardwy &rarr; Tałty to&nbsp;czyste piękno. Polecam każdemu!",
    rating: 5,
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < n ? "text-amber-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">Opinie</h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-gray-900">Co mówią goście</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-gray-100 p-6 bg-gradient-to-br from-white to-sky-50/30"
            >
              <Stars n={t.rating} />
              <p className="text-sm text-gray-600 leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
              <p className="text-sm font-semibold text-gray-900">{t.name}</p>
              <p className="text-xs text-gray-400">{t.loc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
