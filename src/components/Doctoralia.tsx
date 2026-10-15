import { doctor } from "@/data/site";
import { StethoMark } from "./Icons";
import { Heading, Reveal } from "./Reveal";

const perks = [
  { title: "Horários em tempo real", text: "Escolha o dia e o horário mais convenientes, a qualquer momento." },
  { title: "Certificado de excelência", text: "Distinção concedida pelo Doctoralia em 2022 e 2023, a partir da avaliação dos pacientes." },
  { title: `${doctor.doctoraliaAnswers} dúvidas respondidas`, text: "Perguntas de pacientes esclarecidas pelo próprio Dr. Augusto." },
];

export default function Doctoralia() {
  return (
    <section aria-labelledby="doctoralia-titulo" className="relative overflow-hidden bg-linen py-28 md:py-40">
      <StethoMark tone="mono" weight={0.6} dots={false} aria-hidden className="pointer-events-none absolute -right-10 top-1/2 h-[120%] w-auto -translate-y-1/2 text-sand" />

      <div className="relative mx-auto grid max-w-[1200px] gap-16 px-6 md:px-10 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="text-[13px] tracking-[0.06em] text-taupe">Agenda online</p>
          </Reveal>
          <div id="doctoralia-titulo">
            <Heading lines={["Agende pelo Doctoralia"]} className="mt-5 text-[clamp(2.4rem,4.4vw,3.6rem)]" />
          </div>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-[30rem] text-[17px] leading-[1.8] text-graphite-soft">
              Consulte os horários disponíveis e marque sua consulta no perfil oficial do Dr. Augusto, onde estão também
              as {doctor.doctoraliaReviews} opiniões verificadas, os convênios aceitos e os valores.
            </p>
            <div className="mt-11 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-7">
              <a href={doctor.doctoralia} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                Abrir agenda no Doctoralia
              </a>
              <span className="text-[13px] text-taupe">Abre em uma nova aba</span>
            </div>
          </Reveal>
        </div>

        <ul className="lg:col-span-5 lg:col-start-8">
          {perks.map((p, i) => (
            <li key={p.title} className="hairline border-t py-7 last:border-b">
              <Reveal delay={i * 0.08}>
                <span className="block font-serif text-[23px] leading-snug text-graphite">{p.title}</span>
                <span className="mt-1.5 block max-w-[24rem] text-[15px] leading-[1.7] text-graphite-soft">{p.text}</span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
