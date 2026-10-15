"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { doctor, formation } from "@/data/site";
import { Heading, Reveal, ease } from "./Reveal";

const officeBlur =
  "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAATABADASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAQGAgX/xAAfEAABBAMAAwEAAAAAAAAAAAABAAIDBBEhMQUSFEH/xAAWAQEBAQAAAAAAAAAAAAAAAAACAwT/xAAZEQEAAgMAAAAAAAAAAAAAAAAAAQIRMWH/2gAMAwEAAhEDEQA/AKh0+Kz9/iSqW2mIA9JXI+m1YyXQyMY3mupqp4+e+xs3sYcaLSs05V6qixhAy0a5pYmAA0MIQnbQw//Z";

export default function About() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 80%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 30 });

  return (
    <section id="sobre" className="relative bg-white py-28 md:py-44">
      <div className="mx-auto grid max-w-[1200px] gap-16 px-6 md:px-10 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <figure>
                <div className="relative mx-auto aspect-[409/488] w-full max-w-[340px] overflow-hidden rounded-[6px] bg-linen lg:mx-0">
                  <Image
                    src="/images/dr-augusto-consultorio.jpg"
                    alt="Dr. Augusto de jaleco no consultório"
                    fill
                    sizes="(min-width: 1024px) 340px, 90vw"
                    placeholder="blur"
                    blurDataURL={officeBlur}
                    className="object-cover"
                  />
                </div>
                <figcaption className="mx-auto mt-4 max-w-[340px] font-serif text-[15px] italic text-taupe lg:mx-0">
                  No consultório, em Uberlândia
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <Heading lines={["Sobre o Dr. Augusto"]} className="text-[clamp(2.4rem,4.4vw,3.6rem)]" />

          <Reveal delay={0.1} className="mt-10 max-w-[34rem] space-y-6 text-[17px] leading-[1.85] text-graphite-soft">
            <p>
              Formado em Medicina pela Universidade Federal de Uberlândia, onde também concluiu a residência em
              Otorrinolaringologia e a especialização em Cirurgia Plástica da Face. Aprofundou-se na área com a
              pós-graduação em Plástica de Face pelo IBPG, em São Paulo.
            </p>
            <p>
              Dedicou dezoito anos ao ensino da medicina. No consultório, mantém o mesmo cuidado de professor: escuta com
              calma, explica cada etapa com clareza e indica a cirurgia apenas quando ela de fato faz diferença. Segue em
              atualização constante em rinoplastia e nas cirurgias de ouvido, nariz e garganta.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-16 max-w-[34rem] border-l border-stetho/60 pl-7 font-serif text-[clamp(1.6rem,2.6vw,2.1rem)] font-light italic leading-[1.3] text-graphite">
              Oferecer 110% de sua capacidade a cada paciente.
            </p>
          </Reveal>

          <div className="mt-20">
            <p className="text-[13px] tracking-[0.06em] text-taupe">Formação e trajetória</p>
            <ol ref={listRef} className="relative mt-8">
              <span aria-hidden className="absolute bottom-2 left-[3px] top-2 w-px bg-graphite/10" />
              <motion.span aria-hidden style={{ scaleY: progress }} className="absolute bottom-2 left-[3px] top-2 w-px origin-top bg-stetho/70" />
              {formation.map((f, i) => (
                <motion.li
                  key={f.title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                  transition={{ duration: 1, ease, delay: i * 0.06 }}
                  className="relative pb-8 pl-9 last:pb-0"
                >
                  <span aria-hidden className="absolute left-0 top-[0.7rem] size-[7px] rounded-full bg-stetho" />
                  <span className="block font-serif text-[22px] leading-snug text-graphite">{f.title}</span>
                  <span className="mt-0.5 block text-[14px] text-taupe">{f.place}</span>
                </motion.li>
              ))}
            </ol>
          </div>

          <Reveal>
            <dl className="hairline mt-20 flex flex-wrap gap-x-12 gap-y-5 border-t pt-8 text-[14px]">
              {[
                { k: "Conselho Regional de Medicina", v: doctor.crm },
                { k: "Registro de especialista", v: doctor.rqe },
                { k: "Associação Médica Brasileira", v: doctor.amb },
              ].map((r) => (
                <div key={r.k}>
                  <dt className="text-taupe">{r.k}</dt>
                  <dd className="mt-1 tracking-[0.02em] text-graphite">{r.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
