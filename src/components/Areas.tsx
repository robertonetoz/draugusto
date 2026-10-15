"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { areas, type AreaId } from "@/data/site";
import { Heading, Reveal, ease } from "./Reveal";

// Perfil de cabeça desenhado à mão, voltado para a direita
const outline =
  "M128 470C128 430 120 400 104 372C70 330 60 270 66 220C74 120 150 60 236 62C300 64 336 104 342 160C344 180 340 196 342 206C344 214 352 222 356 236C362 252 372 272 376 286C378 294 372 300 362 300C356 300 352 304 354 310C356 318 360 324 358 330C356 336 350 338 352 344C354 350 358 356 354 364C350 372 346 380 348 392C350 404 340 414 322 416C300 418 280 420 268 432C260 444 258 458 260 470";

const regions: Record<AreaId, { paths: string[]; spot: [number, number] }> = {
  ouvido: {
    spot: [186, 256],
    paths: [
      "M196 216C178 206 160 220 164 246C166 266 170 284 186 296C196 302 204 294 200 284C196 274 206 270 208 256C212 236 210 222 196 216Z",
      "M192 232C180 232 176 248 184 262C188 270 196 268 196 260",
      "M206 262H222",
      "M232 262a8 8 0 1 1-8-8a5 5 0 0 1 5 5a2.5 2.5 0 0 1-2.5 2.5",
      "M236 252c2-10 12-12 15-5c3 7-5 11-11 8",
    ],
  },
  nariz: {
    spot: [362, 270],
    paths: [
      "M342 206C344 214 352 222 356 236C362 252 372 272 376 286C378 294 372 300 362 300C356 300 352 304 354 310",
      "M350 296C326 290 290 286 254 290",
      "M336 278C318 271 296 270 276 275",
      "M332 262C316 257 300 257 286 261",
      "M306 236m-22 0a22 13 0 1 0 44 0a22 13 0 1 0-44 0",
    ],
  },
  garganta: {
    spot: [250, 396],
    paths: [
      "M254 290C240 310 236 340 244 370C250 396 254 420 254 470",
      "M284 330C270 336 262 350 262 366",
      "M268 418C284 418 292 428 292 442V470",
      "M264 448H290M264 458H290",
    ],
  },
};

export default function Areas() {
  const [active, setActive] = useState<AreaId>("nariz");
  const reduce = useReducedMotion();
  const area = areas.find((a) => a.id === active)!;

  return (
    <section id="atuacao" className="relative overflow-hidden py-28 md:py-44">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Heading lines={["Áreas de atuação"]} className="text-[clamp(2.4rem,4.4vw,3.6rem)] lg:col-span-6" />
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <p className="max-w-[28rem] text-[17px] leading-[1.8] text-graphite-soft">
              Ouvido, nariz e garganta formam um só sistema. Selecione uma região para conhecer as condições tratadas e
              os procedimentos realizados.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Ilustração */}
          <Reveal className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-t-full bg-linen px-6 pt-16 sm:px-12">
              <svg viewBox="40 40 360 440" className="mx-auto block w-full max-w-[400px]" role="img" aria-label="Ilustração de perfil com ouvido, nariz e garganta destacáveis">
                <motion.path
                  d={outline}
                  fill="none"
                  stroke="#3a332e"
                  strokeWidth={1.3}
                  strokeLinecap="round"
                  initial={reduce ? false : { pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 3, ease }}
                />
                <path d="M318 214C326 210 334 210 340 214" fill="none" stroke="#3a332e" strokeWidth={1.2} strokeLinecap="round" opacity={0.5} />

                {(Object.keys(regions) as AreaId[]).map((id) => {
                  const on = id === active;
                  return (
                    <g key={id}>
                      {regions[id].paths.map((d, i) => (
                        <motion.path
                          key={i}
                          d={d}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={false}
                          animate={{
                            stroke: on ? "#3e6aa8" : "#3a332e",
                            strokeWidth: on ? 1.8 : 1,
                            opacity: on ? 1 : id === "ouvido" && i < 2 ? 0.7 : 0.18,
                          }}
                          transition={{ duration: 0.7, ease }}
                        />
                      ))}
                    </g>
                  );
                })}

                {(Object.keys(regions) as AreaId[]).map((id) => {
                  const [cx, cy] = regions[id].spot;
                  const on = id === active;
                  return (
                    <g
                      key={id}
                      role="button"
                      tabIndex={0}
                      aria-label={`Ver ${areas.find((a) => a.id === id)!.name.toLowerCase()}`}
                      aria-pressed={on}
                      onClick={() => setActive(id)}
                      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), setActive(id))}
                      className="cursor-pointer outline-none [&:focus-visible>circle:first-child]:stroke-stetho"
                    >
                      <circle cx={cx} cy={cy} r={22} fill="transparent" stroke="transparent" strokeWidth={1} />
                      {on && <circle cx={cx} cy={cy} r={6} fill="#3e6aa8" className="ping-soft" style={{ transformOrigin: `${cx}px ${cy}px`, transformBox: "view-box" }} />}
                      <circle cx={cx} cy={cy} r={on ? 6 : 5} fill={on ? "#3e6aa8" : "#faf8f5"} stroke="#3e6aa8" strokeWidth={1.5} className="transition-all duration-500" />
                    </g>
                  );
                })}
              </svg>
            </div>
          </Reveal>

          {/* Seletor e conteúdo */}
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-6">
            <div role="tablist" aria-label="Áreas de atuação" className="hairline flex gap-8 border-b">
              {areas.map((a) => {
                const on = a.id === active;
                return (
                  <button
                    key={a.id}
                    role="tab"
                    id={`tab-${a.id}`}
                    aria-selected={on}
                    aria-controls="painel-area"
                    onClick={() => setActive(a.id)}
                    className={`relative pb-4 text-left transition-colors duration-500 ${on ? "text-graphite" : "text-graphite/35 hover:text-graphite/60"}`}
                  >
                    <span className="display block text-[clamp(1.7rem,2.6vw,2.2rem)]">{a.name}</span>
                    {on && <motion.span layoutId="area-line" className="absolute -bottom-px left-0 right-0 h-px bg-stetho" transition={{ type: "spring", stiffness: 260, damping: 32 }} />}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                id="painel-area"
                role="tabpanel"
                aria-labelledby={`tab-${active}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.45, ease }}
                className="pt-10"
              >
                <p className="max-w-[32rem] font-serif text-[22px] leading-[1.5] text-graphite">{area.summary}</p>

                <div className="mt-12 grid gap-10 sm:grid-cols-2">
                  <div>
                    <h3 className="text-[13px] tracking-[0.06em] text-taupe">Condições tratadas</h3>
                    <ul className="mt-5 space-y-3 text-[15px] text-graphite-soft">
                      {area.conditions.map((c) => (
                        <li key={c} className="flex gap-3">
                          <span aria-hidden className="mt-[0.7rem] size-1 shrink-0 rounded-full bg-stetho" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-[13px] tracking-[0.06em] text-taupe">Cirurgias e exames</h3>
                    <ul className="mt-5 space-y-3 text-[15px] text-graphite-soft">
                      {area.procedures.map((p) => (
                        <li key={p} className="flex gap-3">
                          <span aria-hidden className="mt-[0.75rem] h-px w-2.5 shrink-0 bg-graphite/30" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="hairline mt-14 flex flex-col gap-4 border-t pt-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[15px] text-graphite-soft">Atendimento a adultos e crianças, em consulta presencial.</p>
              <a href="#agendar" className="link-soft shrink-0">
                Agendar avaliação
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
