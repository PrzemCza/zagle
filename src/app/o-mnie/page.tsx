"use client";

import { Anchor, Award, CalendarDays } from "lucide-react";
import { IMAGES } from "@/lib/images";

export default function AboutPage() {
  return (
    <div className="pb-16">
      {/* Intro */}
      <section className="bg-sky-50 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            <Anchor className="h-5 w-5" /> O mnie
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Cześć, jestem Marek Wiśniewski
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Od ponad 12 lat żegluję po Krainie Wielkich Jezior Mazurskich. To, co zaczęło się jako hobby, dziś jest moją pasją i&nbsp;sposobem na&nbsp;życie. Moją misją jest dzielenie się tym pięknym akwenem z&nbsp;innymi – bezpiecznie i&nbsp;z&nbsp;uśmiechem.
          </p>
        </div>
      </section>

      {/* About me details */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            <div className="flex flex-col items-center text-center rounded-2xl bg-white shadow-sm p-8">
              <div className="w-14 h-14 rounded-full bg-accent-light flex items-center justify-center text-accent mb-4">
                <Anchor className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Żeglarz od 2011 roku</h3>
              <p className="text-sm text-gray-500">
                Uprawnienia sternika jachtowego od 2012 r. Ponad 3 000 godzin na wodzie.
              </p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl bg-white shadow-sm p-8">
              <div className="w-14 h-14 rounded-full bg-accent-light flex items-center justify-center text-accent mb-4">
                <Award className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Bezpieczeństwo ponad wszystko</h3>
              <p className="text-sm text-gray-500">
                Łódź przechodzi pełny coroczny przegląd. Każdy klient przechodzi krótki instruktaż.
              </p>
            </div>
            <div className="flex flex-col items-center text-center rounded-2xl bg-white shadow-sm p-8">
              <div className="w-14 h-14 rounded-full bg-accent-light flex items-center justify-center text-accent mb-4">
                <CalendarDays className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Elastyczny grafik</h3>
              <p className="text-sm text-gray-500">
                Działam w sezonie od maja do września. Możliwe także dłuższe wynajęcia z góry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lake info */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">
                Jezioro Śniardwy
              </h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
                Największe jezioro w&nbsp;Polsce
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Jezioro Śniardwy, położone w województwie warmińsko-mazurskim, to największy akwen w Polsce – o&nbsp;powierzchni ponad 113&nbsp;km². Nazywane &bdquo;Mazurskim Morzem&rdquo; oferuje niezliczone zatoczki, wyspy i&nbsp;kanały łączące z&nbsp;innymi jeziorami: Niegocin, Tałty, Mamry.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Z Mikołajek, naszej bazy, wpłyniesz na otwarte wody Śniardw lub wybierzesz się na&nbsp;spokojniejsze trasy – przez Kanał Jegliński do jeziora Roś albo na północ, w&nbsp;kierunku Giżycka.
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Powierzchnia</span>
                  <span className="font-semibold">113,8 km²</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Głębokość max.</span>
                  <span className="font-semibold">23,4 m</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Wyspy</span>
                  <span className="font-semibold">8 wysp</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span>Trasa do Giżycka</span>
                  <span className="font-semibold">~28 km</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img
                src={IMAGES.lake}
                alt="Widok na jezioro Śniardwy"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-8">Galeria</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {IMAGES.about.map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden aspect-[4/3] shadow">
                <img
                  src={src}
                  alt={`Zdjęcie ${i + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}