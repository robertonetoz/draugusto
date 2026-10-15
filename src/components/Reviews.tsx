"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { doctor, reviews, type Review } from "@/data/site";
import { GoogleIcon, Stars } from "./Icons";
import { Heading, Reveal, ease } from "./Reveal";

type Filter = "todas" | Review["source"];

const filters: { id: Filter; label: string }[] = [
  { id: "todas", label: "Todos" },
  { id: "google", label: "Google" },
  { id: "doctoralia", label: "Doctoralia" },
];

const INITIAL = 6;

export default function Reviews() {
  const [filter, setFilter] = useState<Filter>("todas");
  const [expanded, setExpanded] = useState(false);
  const list = reviews.filter((r) => filter === "todas" || r.source === filter);
  const shown = expanded ? list : list.slice(0, INITIAL);

  return (
    <section id="depoimentos" className="relative py-28 md:py-44">
      <div className="mx-auto grid max-w-[1200px] gap-16 px-6 md:px-10 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Heading lines={["Depoimentos"]} className="text-[clamp(2.4rem,4.4vw,3.6rem)]" />

            <Reveal delay={0.1} className="mt-12">
              <div className="flex items-end gap-4">
                <span className="display text-[4.2rem] leading-[0.8]">{doctor.googleRating}</span>
                <span className="pb-1 text-[13px] text-taupe">
                  <Stars className="text-[11px] text-[#d9a44a]" />
                  <span className="mt-1.5 flex items-center gap-1.5">
                    <GoogleIcon className="size-3" /> {doctor.googleReviews} avaliações no Google
                  </span>
                </span>
              </div>
              <p className="mt-8 max-w-[18rem] text-[15px] leading-[1.75] text-graphite-soft">
                No Doctoralia, são mais de {doctor.doctoraliaReviews} opiniões. As qualidades mais lembradas pelos pacientes:
              </p>
              <ul className="mt-5 space-y-2 font-serif text-[19px] italic text-graphite">
                {["Atencioso durante a consulta", "Explicações detalhadas", "Ótimo consultório"].map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <div className="flex gap-7" role="group" aria-label="Filtrar depoimentos">
            {filters.map((f) => {
              const on = filter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => {
                    setFilter(f.id);
                    setExpanded(false);
                  }}
                  aria-pressed={on}
                  className={`relative pb-1.5 text-[13.5px] tracking-[0.04em] transition-colors duration-500 ${on ? "text-graphite" : "text-taupe hover:text-graphite"}`}
                >
                  {f.label}
                  {on && <motion.span layoutId="review-filter" className="absolute inset-x-0 bottom-0 h-px bg-stetho" transition={{ type: "spring", stiffness: 260, damping: 32 }} />}
                </button>
              );
            })}
          </div>

          <ul className="mt-12 columns-1 gap-x-14 md:columns-2">
            <AnimatePresence mode="popLayout" initial={false}>
              {shown.map((r, i) => (
                <motion.li
                  key={r.name}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  viewport={{ once: true, margin: "0px 0px -6% 0px" }}
                  transition={{ duration: 1, ease, delay: (i % 2) * 0.08 }}
                  className="hairline mb-12 break-inside-avoid border-t pt-8"
                >
                  <figure>
                    <blockquote className="font-serif text-[20px] leading-[1.55] text-graphite">“{r.text}”</blockquote>
                    <figcaption className="mt-5 text-[13px] leading-relaxed">
                      <span className="block tracking-[0.03em] text-graphite">{r.name}</span>
                      <span className="block text-taupe">
                        {r.source === "google" ? "Google" : "Doctoralia"}, {r.when}
                        {r.tag ? `, ${r.tag.toLowerCase()}` : ""}
                      </span>
                    </figcaption>
                  </figure>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>

          {list.length > INITIAL && (
            <button type="button" onClick={() => setExpanded((e) => !e)} className="link-soft">
              {expanded ? "Mostrar menos" : `Ler mais ${list.length - INITIAL} depoimentos`}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
