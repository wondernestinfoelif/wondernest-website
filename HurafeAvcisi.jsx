import React from "react";
import { Search, Leaf, Sparkles, ShieldQuestion, BookOpenText, Users2, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// NOTE: TailwindCSS assumed. This single-file component builds a not-plain background
// (animated gradient + subtle pattern overlay) and standardizes the 🔍 + 🍃 icon language
// across hero, sections, and cards. Replace LOGO_SRC with your logo path when ready.

const LOGO_SRC = "https://placehold.co/140x40?text=Wondernest"; // TODO: change to your logo

export default function WondernestHurafeAvcisi() {
  return (
    <div className="min-h-screen text-slate-900 bg-gradient-to-br from-amber-50 via-rose-50 to-sky-50 relative overflow-hidden">
      {/* Soft pattern overlay (dots + grain) */}
      <div className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-50" aria-hidden>
        <svg className="absolute -top-10 -left-10 w-[140%] h-[140%]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#000" opacity="0.06" />
              <circle cx="32" cy="32" r="1" fill="#000" opacity="0.05" />
            </pattern>
            <filter id="grain">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
              <feComponentTransfer>
                <feFuncA type="table" tableValues="0 0.035" />
              </feComponentTransfer>
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
        <div className="absolute inset-0" style={{ filter: "url(#grain)" }} />
      </div>

      {/* NAVBAR */}
      <header className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-6">
            <a href="#" className="flex items-center gap-3">
              <img src={LOGO_SRC} alt="Wondernest" className="h-8 w-auto" />
              <span className="hidden sm:inline text-xl font-semibold tracking-tight">Wondernest</span>
            </a>
            <nav className="flex items-center gap-6 text-sm">
              <a href="#hurafe" className="hover:opacity-80 flex items-center gap-2"><Search className="h-4 w-4" /> Hurafe Avcısı</a>
              <a href="#ekip" className="hover:opacity-80 flex items-center gap-2"><Users2 className="h-4 w-4" /> Ekibimiz</a>
              <a href="#yazilar" className="hover:opacity-80 flex items-center gap-2"><BookOpenText className="h-4 w-4" /> Yazılar</a>
              <a href="#katil" className="rounded-full bg-slate-900 text-white px-4 py-2 hover:bg-slate-800 transition">Bize Katıl</a>
            </nav>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                <span className="inline-flex items-center gap-3">
                  <Leaf className="h-8 w-8 text-emerald-600" />
                  Hurafelerin Arasına <span className="text-emerald-700">Bilim</span> Ekiyoruz
                </span>
              </motion.h1>
              <p className="mt-5 text-base md:text-lg text-slate-700 max-w-2xl">
                Wondernest’te <strong>🔍 merak</strong> ve <strong>🌿 doğa</strong> aynı masada. “Hurafe Avcısı” serimizde toplumda sık duyulan iddiaları inceliyor, kanıtları aksesuar değil, merkez yapıyoruz.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#hurafe" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 text-white px-5 py-2.5 shadow-sm hover:bg-emerald-500 transition">
                  Başla <ChevronRight className="h-4 w-4" />
                </a>
                <a href="#yazilar" className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-5 py-2.5 border border-slate-200 hover:bg-white transition">
                  Son Yazılar
                </a>
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm text-slate-600">
                <span className="inline-flex items-center gap-1"><Search className="h-4 w-4" /> merak</span>
                <span className="inline-flex items-center gap-1"><Leaf className="h-4 w-4" /> öğrenme</span>
                <span className="inline-flex items-center gap-1"><Sparkles className="h-4 w-4" /> topluluk</span>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl p-1 bg-gradient-to-tr from-emerald-500/30 via-rose-400/30 to-sky-400/30">
                <div className="rounded-2xl bg-white p-6 shadow-xl">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { title: "Soğuk hava grip yapar mı?", tag: "Hüküm: Yanlış", icon: <ShieldQuestion className="h-5 w-5" /> },
                      { title: "Hapşırınca kalp durur mu?", tag: "Hüküm: Yanlış", icon: <ShieldQuestion className="h-5 w-5" /> },
                      { title: "Beynin %10'u miti", tag: "Hüküm: Yanlış", icon: <ShieldQuestion className="h-5 w-5" /> },
                      { title: "Unutkanlık = yaşlılık?", tag: "Hüküm: Kısmen", icon: <ShieldQuestion className="h-5 w-5" /> },
                    ].map((c, i) => (
                      <article key={i} className="group rounded-xl border border-slate-200 p-4 hover:shadow-md transition bg-gradient-to-br from-white to-slate-50/60">
                        <div className="flex items-center gap-2 text-slate-700">
                          <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-emerald-50 text-emerald-700">
                            {c.icon}
                          </span>
                          <h3 className="font-medium leading-snug flex-1">{c.title}</h3>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">{c.tag}</span>
                          <button className="text-emerald-700 text-sm inline-flex items-center gap-1 group-hover:gap-2 transition">Oku <ChevronRight className="h-4 w-4" /></button>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-500">🔍 Bilimsel kaynaklara dayalı, sade ve anlaşılır açıklamalar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HURAFE AVCISI SECTION */}
      <section id="hurafe" className="relative z-10 py-14 md:py-20 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white"><Search className="h-5 w-5" /></span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Hurafe Avcısı • <span className="text-emerald-700">Son Yazılar</span></h2>
          </div>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {new Array(6).fill(0).map((_, i) => (
              <article key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-2 text-slate-700">
                  <Leaf className="h-5 w-5 text-emerald-700" />
                  <p className="text-xs font-medium uppercase tracking-wide text-emerald-700">Meraklısına!</p>
                </div>
                <h3 className="mt-3 font-semibold text-lg leading-snug">Başlık örneği – Hurafe X</h3>
                <p className="mt-2 text-sm text-slate-600 line-clamp-3">Kısa açıklama alanı. Hüküm, kanıtlar ve pratik öneriler. Buraya CMS’den dinamik içerik gelecek.</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700">Hüküm: Yanlış</span>
                  <button className="text-sm text-emerald-700 inline-flex items-center gap-1 hover:gap-2 transition">Oku <ChevronRight className="h-4 w-4" /></button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EKİP */}
      <section id="ekip" className="relative z-10 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white"><Users2 className="h-5 w-5" /></span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">2025–2026 Departman Ekibimiz</h2>
          </div>
          <p className="mt-3 text-slate-600">Yalnızca isimlerin yer aldığı, sade ama profesyonel bir ekip listesi aşağıda. (CMS’den dinamik çekilecek.)</p>
          <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {["Elif Yıldız", "Hasan Tarık Doğan", "Leyla K." , "Eren A.", "İpek S.", "Mert D."].map((n, i) => (
              <li key={i} className="rounded-xl border border-slate-200 bg-white/80 px-4 py-3">{n}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-slate-200 bg-white/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Leaf className="h-5 w-5 text-emerald-700" />
              <p className="text-sm text-slate-600">Bilimin ışığında hurafeleri nazikçe uğurluyoruz.</p>
            </div>
            <p className="text-xs text-slate-500">© {new Date().getFullYear()} Wondernest. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
