"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { doctor } from "@/data/site";
import { GoogleIcon, Stars } from "./Icons";

const portraitBlur =
  "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAQABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAgMFBv/EAB4QAAICAgIDAAAAAAAAAAAAAAECAwQAEQUyIjFB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAXEQEBAQEAAAAAAAAAAAAAAAARACFC/9oADAMBAAIRAxEAPwCtzJRoBEzgFj137xXAqqV3VSNBuo+ZkeUtTGVJ2cl94NO7Yr+ccjBmOzg1ryX/2Q==";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "8%"]);

  return (
    <section id="topo" ref={ref} className="relative overflow-hidden pb-24 pt-36 md:pb-32 md:pt-44 lg:pb-40">
      <div className="mx-auto grid max-w-[1200px] gap-16 px-6 md:px-10 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="lg:col-span-6">
          <p className="anim-rise flex items-center gap-3 text-[13px] tracking-[0.06em] text-taupe" style={{ animationDelay: "0.1s" }}>
            <span className="relative grid size-1.5 place-items-center">
              <span className="ping-soft absolute inset-0 rounded-full bg-stetho" />
              <span className="relative size-1.5 rounded-full bg-stetho" />
            </span>
            Otorrinolaringologista em Uberlândia
          </p>

          <h1 className="display anim-rise mt-8 text-[clamp(3rem,6.4vw,5.6rem)] leading-[0.98]" style={{ animationDelay: "0.2s" }}>
            Augusto César
            <br />
            Borges
          </h1>

          <p className="anim-rise mt-9 max-w-[30rem] text-[17px] leading-[1.8] text-graphite-soft" style={{ animationDelay: "0.4s" }}>
            Cuidado atento com o ouvido, o nariz e a garganta, de adultos e crianças. Especialista em rinoplastia e
            cirurgia plástica da face.
          </p>

          <div className="anim-rise mt-11 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8" style={{ animationDelay: "0.55s" }}>
            <a href="#agendar" className="btn btn-dark">
              Agendar consulta
            </a>
            <a href={doctor.doctoralia} target="_blank" rel="noopener noreferrer" className="link-soft">
              Ver agenda no Doctoralia
            </a>
          </div>

          <dl className="anim-fade hairline mt-16 grid max-w-[30rem] grid-cols-3 border-t pt-7 text-[13px] leading-snug" style={{ animationDelay: "0.8s" }}>
            <div>
              <dt className="sr-only">Avaliação no Google</dt>
              <dd className="flex items-center gap-1.5">
                <span className="font-serif text-[26px] leading-none text-graphite">{doctor.googleRating}</span>
                <Stars className="text-[9px] text-[#d9a44a]" />
              </dd>
              <dd className="mt-2 flex items-center gap-1.5 text-taupe">
                <GoogleIcon className="size-3" /> {doctor.googleReviews} avaliações
              </dd>
            </div>
            <div className="hairline border-l pl-5">
              <dt className="sr-only">Opiniões no Doctoralia</dt>
              <dd className="font-serif text-[26px] leading-none text-graphite">{doctor.doctoraliaReviews}</dd>
              <dd className="mt-2 text-taupe">opiniões no Doctoralia</dd>
            </div>
            <div className="hairline border-l pl-5">
              <dt className="sr-only">Docência</dt>
              <dd className="font-serif text-[26px] leading-none text-graphite">18 anos</dd>
              <dd className="mt-2 text-taupe">dedicados ao ensino</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-[440px] lg:col-span-5 lg:col-start-8 lg:max-w-none">
          {/* Arco de linha fina, deslocado, atrás da foto */}
          <span aria-hidden className="anim-fade absolute -right-4 -top-4 bottom-8 left-4 rounded-t-full border border-stone/70 md:-right-6 md:-top-6" style={{ animationDelay: "0.6s" }} />
          <div className="wall anim-unveil relative aspect-[4/5] overflow-hidden rounded-t-full" style={{ animationDelay: "0.15s" }}>
            <motion.div style={{ y: photoY }} className="absolute inset-0">
              <div className="anim-settle relative h-full w-full" style={{ animationDelay: "0.15s" }}>
                <Image
                  src="/images/dr-augusto-retrato.jpg"
                  alt="Retrato do Dr. Augusto César Borges"
                  fill
                  preload
                  sizes="(min-width: 1024px) 34vw, 90vw"
                  placeholder="blur"
                  blurDataURL={portraitBlur}
                  className="object-cover object-[50%_18%]"
                />
              </div>
            </motion.div>
          </div>
          <p className="anim-fade mt-5 text-right font-serif text-[15px] italic text-taupe" style={{ animationDelay: "0.9s" }}>
            {doctor.crm}, {doctor.rqe}
          </p>
        </div>
      </div>
    </section>
  );
}
