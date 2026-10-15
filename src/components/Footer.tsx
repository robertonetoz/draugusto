import { clinic, doctor, navLinks } from "@/data/site";
import { InstagramIcon, Logo, WhatsAppIcon } from "./Icons";
import { waLink } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="hairline border-t bg-paper pb-28 pt-20 md:pb-14">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-taupe">
            Otorrinolaringologia e cirurgia plástica da face em Uberlândia – MG.
          </p>
          <div className="mt-6 flex gap-2">
            <a href={doctor.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid size-10 place-items-center rounded-full border border-graphite/12 text-graphite-soft transition-colors hover:border-stetho hover:text-stetho">
              <InstagramIcon className="size-4" />
            </a>
            <a href={waLink(doctor.whatsapp)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid size-10 place-items-center rounded-full border border-graphite/12 text-graphite-soft transition-colors hover:border-stetho hover:text-stetho">
              <WhatsAppIcon className="size-4" />
            </a>
          </div>
        </div>

        <nav aria-label="Rodapé" className="lg:col-span-2">
          <h2 className="text-[13px] tracking-[0.06em] text-taupe">Navegação</h2>
          <ul className="mt-5 space-y-2.5 text-[14px] text-graphite-soft">
            {[...navLinks, { href: "#duvidas", label: "Dúvidas" }, { href: "#agendar", label: "Agendar" }].map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-stetho">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="text-[13px] tracking-[0.06em] text-taupe">Consultório</h2>
          <address className="mt-5 text-[14px] not-italic leading-relaxed text-graphite-soft">
            {clinic.street}, {clinic.room}
            <br />
            {clinic.district}
            <br />
            {clinic.city}, {clinic.cep}
            <br />
            <a href={doctor.phoneHref} className="mt-2 inline-block hover:text-stetho">
              {doctor.phoneDisplay}
            </a>
          </address>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-[13px] tracking-[0.06em] text-taupe">Responsável técnico</h2>
          <p className="mt-5 text-[14px] leading-relaxed text-graphite-soft">
            {doctor.name}
            <br />
            {doctor.crm}
            <br />
            {doctor.rqe}, Otorrinolaringologia
          </p>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-[1200px] flex-col gap-2 px-6 text-[12px] text-taupe md:flex-row md:justify-between md:px-10">
        <p>© {doctor.name}. Todos os direitos reservados.</p>
        <p>As informações deste site são educativas e não substituem uma consulta médica.</p>
      </div>
    </footer>
  );
}
