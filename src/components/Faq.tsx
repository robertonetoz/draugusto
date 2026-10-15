import { faqs } from "@/data/site";
import { Heading, Reveal } from "./Reveal";

export default function Faq() {
  return (
    <section id="duvidas" className="py-28 md:py-44">
      <div className="mx-auto grid max-w-[1200px] gap-14 px-6 md:px-10 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <Heading lines={["Dúvidas", "frequentes"]} className="text-[clamp(2.4rem,4.4vw,3.6rem)]" />
        </div>
        <Reveal className="lg:col-span-7 lg:col-start-6">
          <div className="hairline border-t">
            {faqs.map((f) => (
              <details key={f.q} className="hairline group border-b">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-7 font-serif text-[22px] leading-snug text-graphite transition-colors duration-300 hover:text-stetho">
                  {f.q}
                  <span aria-hidden className="relative size-3 shrink-0">
                    <span className="absolute left-0 top-1/2 h-px w-3 bg-current" />
                    <span className="absolute left-1/2 top-0 h-3 w-px bg-current transition-transform duration-500 group-open:scale-y-0" />
                  </span>
                </summary>
                <p className="max-w-[36rem] pb-8 pr-10 text-[16px] leading-[1.8] text-graphite-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
