"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { moreResults, results, type Result } from "@/data/site";
import { Heading, Reveal, ease } from "./Reveal";

export default function Results() {
  const [index, setIndex] = useState(0);
  const item = results[index];

  return (
    <section id="resultados" className="relative bg-white py-28 md:py-44">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Heading lines={["Antes e depois"]} className="text-[clamp(2.4rem,4.4vw,3.6rem)] lg:col-span-6" />
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <p className="max-w-[28rem] text-[17px] leading-[1.8] text-graphite-soft">
              Alguns resultados de rinoplastia realizados pelo Dr. Augusto. Cada nariz pede um plano próprio, sempre em
              harmonia com o rosto e com a respiração.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-6">
            <div className="relative mx-auto aspect-square max-w-[560px] overflow-hidden rounded-[6px] bg-linen">
              <AnimatePresence initial={false}>
                <motion.div
                  key={item.id}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease }}
                >
                  <Composite item={item} />
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-8 lg:pt-2">
            <p className="text-[13px] tracking-[0.06em] text-taupe">Casos</p>
            <ul className="hairline mt-5 grid grid-cols-2 border-t lg:grid-cols-1">
              {results.map((r, i) => {
                const on = i === index;
                return (
                  <li key={r.id} className="hairline border-b">
                    <button type="button" onClick={() => setIndex(i)} aria-pressed={on} className="group flex w-full items-baseline gap-4 py-4 text-left">
                      <span className={`font-serif text-[15px] italic transition-colors duration-500 ${on ? "text-stetho" : "text-stone"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>
                        <span className={`block font-serif text-[21px] leading-tight transition-colors duration-500 ${on ? "text-graphite" : "text-graphite/45 group-hover:text-graphite/75"}`}>
                          {r.title}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <p className="mt-6 max-w-[22rem] text-[13px] leading-relaxed text-taupe">
              Imagens publicadas com autorização dos pacientes. Os resultados variam de pessoa para pessoa e dependem da
              avaliação individual.
            </p>

            {moreResults.length > 0 && (
              <div className="mt-10">
                <p className="text-[13px] tracking-[0.06em] text-taupe">Outros registros de pacientes</p>
                <ul className="mt-5 grid grid-cols-4 gap-2.5">
                  {moreResults.map((m) => (
                    <li key={m.src} className="relative aspect-square overflow-hidden rounded-[4px] bg-linen">
                      <Image src={m.src} alt={m.alt} fill sizes="(min-width: 1024px) 90px, 23vw" className="object-cover" />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Reveal>
        </div>

      </div>
    </section>
  );
}

/** Foto com antes e depois lado a lado (x) ou um sobre o outro (y), com a marcação de cada metade */
function Composite({ item }: { item: Result }) {
  const label = "pointer-events-none absolute rounded-full bg-paper/90 px-3.5 py-1 font-serif text-[15px] italic text-graphite backdrop-blur-sm";
  return (
    <>
      <Image
        src={item.src}
        alt={`${item.title}, vista ${item.detail.toLowerCase()}: antes e depois`}
        fill
        sizes="(min-width: 1024px) 560px, 100vw"
        placeholder="blur"
        blurDataURL={item.blur}
        className="object-cover"
      />
      {item.split === "x" ? (
        <>
          <span className={`${label} bottom-4 left-4`}>Antes</span>
          <span className={`${label} bottom-4 left-[calc(50%+1rem)]`}>Depois</span>
        </>
      ) : (
        <>
          <span className={`${label} left-4 top-4`}>Antes</span>
          <span className={`${label} left-4 top-[calc(50%+1rem)]`}>Depois</span>
        </>
      )}
    </>
  );
}
