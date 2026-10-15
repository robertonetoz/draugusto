"use client";

import { useState } from "react";
import { MapPin, Navigation, Phone } from "lucide-react";
import { clinic, doctor, hours, weekdayNames } from "@/data/site";
import { hourLabel, listPt, openStatus, waLink } from "@/lib/utils";
import { useMounted } from "@/lib/hooks";
import { StethoMark, WhatsAppIcon } from "./Icons";
import { Heading, Reveal } from "./Reveal";

// Segunda primeiro, domingo por último
const order = [1, 2, 3, 4, 5, 6, 0];

export default function Clinic() {
  const mounted = useMounted();
  const status = mounted ? openStatus() : null;
  const [mapOn, setMapOn] = useState(false);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.mapsQuery)}`;

  return (
    <section id="consultorio" className="relative bg-white py-28 md:py-44">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Heading lines={["Consultório"]} className="text-[clamp(2.4rem,4.4vw,3.6rem)]" />

        <div className="mt-20 grid gap-16 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <address className="not-italic">
              <p className="flex gap-4 font-serif text-[23px] leading-[1.35]">
                <MapPin className="mt-1.5 size-4 shrink-0 text-stetho" strokeWidth={1.3} />
                <span>
                  {clinic.street}, {clinic.room}
                  <span className="block text-graphite-soft">
                    {clinic.district}, {clinic.city}
                  </span>
                  <span className="mt-2 block font-sans text-[14px] text-taupe">
                    {clinic.landmark}. CEP {clinic.cep}
                  </span>
                </span>
              </p>
            </address>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 pl-8">
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="link-soft">
                <Navigation className="size-3.5" strokeWidth={1.4} /> Como chegar
              </a>
              <a href={doctor.phoneHref} className="link-soft">
                <Phone className="size-3.5" strokeWidth={1.4} /> {doctor.phoneDisplay}
              </a>
              <a href={waLink(doctor.whatsapp)} target="_blank" rel="noopener noreferrer" aria-label="Conversar no WhatsApp" className="link-soft">
                <WhatsAppIcon className="size-3.5" /> WhatsApp
              </a>
            </div>

            <div className="mt-16">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-[13px] tracking-[0.06em] text-taupe">Horário de atendimento</h3>
                <span className={`flex items-center gap-2 text-[13px] ${status?.open ? "text-[#2f7a4b]" : "text-taupe"}`} aria-live="polite">
                  {status && <span className={`size-2 rounded-full ${status.open ? "bg-[#2f9a5b]" : "bg-stone"}`} />}
                  {status?.text ?? " "}
                </span>
              </div>
              <ul className="mt-5 divide-y divide-graphite/[0.08] border-y border-graphite/[0.08]">
                {order.map((d) => {
                  const h = hours[d];
                  const today = status?.day === d;
                  return (
                    <li key={d} className={`flex justify-between py-3 text-[15px] ${today ? "text-graphite" : "text-graphite-soft"}`}>
                      <span>
                        {weekdayNames[d]}
                        {today && <span className="ml-2 font-serif text-[15px] italic text-stetho">hoje</span>}
                      </span>
                      <span className={h ? "tabular-nums" : "text-taupe"}>{h ? `${hourLabel(h.open)} às ${hourLabel(h.close)}` : "Fechado"}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[6px] bg-linen sm:aspect-[16/11]">
              {mapOn ? (
                <iframe
                  title="Mapa do consultório"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(clinic.mapsQuery)}&output=embed`}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <button type="button" onClick={() => setMapOn(true)} className="wall group absolute inset-0 grid place-items-center">
                  <span className="flex flex-col items-center gap-3 bg-paper/90 px-10 py-8 text-center transition-colors duration-500 group-hover:bg-white">
                    <StethoMark className="h-10 w-auto text-graphite" weight={2.4} />
                    <span className="font-serif text-[22px]">Ver o mapa</span>
                    <span className="text-[13px] text-taupe">Rua Martinésia, 303, Uberlândia</span>
                  </span>
                </button>
              )}
            </div>

            <div className="mt-12 grid gap-10 sm:grid-cols-2">
              <div>
                <h3 className="text-[13px] tracking-[0.06em] text-taupe">Convênios aceitos</h3>
                <p className="mt-3 font-serif text-[20px] leading-snug text-graphite">{listPt(clinic.plans)}.</p>
                <p className="mt-2 text-[14px] text-taupe">Reembolso para {listPt(clinic.refund)}.</p>
              </div>
              <div>
                <h3 className="text-[13px] tracking-[0.06em] text-taupe">Consulta particular</h3>
                <p className="mt-3 font-serif text-[20px] leading-snug text-graphite">{listPt(clinic.payments, true)}.</p>
                <p className="mt-2 text-[14px] text-taupe">Adultos e crianças, atendimento presencial.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
