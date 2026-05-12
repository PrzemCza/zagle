# Omega Sailing – Strona-wizytówka wynajmu żaglówki na Mazurach

Nowoczesna strona-wizytówka wynajmu żaglówki **Omega** na Jeziorze Śniardwy (Mikołajki).
Zbudowana w Next.js 16 + Tailwind CSS, w pełni responsywna, bez systemu rezerwacji.

## Stack

- **Next.js 16** (App Router) + React 19
- **Tailwind CSS** – stylowanie
- **Lucide React** – ikony
- TypeScript 

## Struktura stron

| Strona | Ścieżka | Opis |
|--------|---------|------|
| Strona główna | `/` | Hero, „Dlaczego my", preview Omegi, opinie klientów, CTA |
| O mnie | `/o-mnie` | Sylwetka właściciela, opis jeziora Śniardwy, trasy, galeria |
| Oferta | `/oferta` | Dane techniczne Omegi, cennik, galeria, CTA kontakt |
| Kontakt | `/kontakt` | Telefon, e-mail, adres, godziny, mapa Google, formularz |

## Uruchomienie

```bash
cd zeglarstwo-app
npm install
npm run dev       # http://localhost:3000
npm run build     # build produkcyjny
```

## Komponenty

| Komponent | Plik | Opis |
|-----------|------|------|
| Header | `src/components/Header.tsx` | Sticky navbar z logo, desktop + mobile menu |
| Footer | `src/components/Footer.tsx` | Footer z linkami, kontaktem, godzinami |
| HeroSection | `src/components/HeroSection.tsx` | Hero z dużym zdjęciem jeziora + CTA |
| FeaturesSection | `src/components/FeaturesSection.tsx` | Sekcja „Dlaczego my" – 4 karty |
| BoatPreview | `src/components/BoatPreview.tsx` | Podgląd Omegi z podstawowymi parametrami |
| TestimonialsSection | `src/components/TestimonialsSection.tsx` | Opinie klientów (3 cytaty) |
| CtaSection | `src/components/CtaSection.tsx` | CTA – telefon + e-mail |
| ContactForm | `src/components/ContactForm.tsx` | Formularz kontaktowy (client component) |

## Zmiany (2026-04-02)

1. **HeroSection** – zmieniono tło na zdjęcie żaglówki na jeziorze (zamiast nurków/ryb).
2. **O mnie** – wymieniono zdjęcia galerii (wszystkie teraz żeglarskie).
3. **Oferta** – wymieniono zdjęcia galerii 1 i 4.
4. Poprawiono wszystkie linki do Unsplash na działające URL-e.

## Zmiany (2026-04-02 – naprawa zdjęć)

5. Wszystkie zdjęcia przeniesione z Unsplash na Pexels (niezawodny CDN bez blokad).
6. Adresy zdjęć scentralizowane w `src/lib/images.ts` – łatwa zmiana w jednym miejscu.
7. Poprawiono hero, podgląd Omegi, galerię w O mnie oraz galerię w Oferta.