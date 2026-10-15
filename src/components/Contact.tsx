"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Check, CheckCheck } from "lucide-react";
import { clinic, doctor } from "@/data/site";
import { listPt, waLink } from "@/lib/utils";
import { StethoMark, WhatsAppIcon } from "./Icons";
import { Heading, Reveal } from "./Reveal";

const patients = [
  { id: "eu", label: "Para mim", text: "para mim" },
  { id: "filho", label: "Para meu filho(a)", text: "para meu filho(a)" },
  { id: "outro", label: "Para outra pessoa", text: "para outra pessoa" },
];

const reasons = [
  "Primeira consulta",
  "Retorno",
  "Avaliação para rinoplastia",
  "Avaliação para cirurgia",
  "Exame de audição ou labirinto",
];

const regions = ["Ouvido", "Nariz", "Garganta", "Não sei dizer"];

const coverages = ["Particular", ...clinic.plans, "Reembolso pelo plano"];

const periods = ["Manhã", "Tarde", "Qualquer horário"];

export default function Contact() {
  const [name, setName] = useState("");
  const [patient, setPatient] = useState("eu");
  const [reason, setReason] = useState(reasons[0]);
  const [region, setRegion] = useState<string[]>([]);
  const [coverage, setCoverage] = useState("Particular");
  const [period, setPeriod] = useState("Qualquer horário");
  const [note, setNote] = useState("");
  const [touched, setTouched] = useState(false);

  const toggleRegion = (r: string) =>
    setRegion((s) => (r === "Não sei dizer" ? (s.includes(r) ? [] : [r]) : s.includes(r) ? s.filter((x) => x !== r) : [...s.filter((x) => x !== "Não sei dizer"), r]));

  const message = useMemo(() => {
    const who = patients.find((p) => p.id === patient)!.text;
    const lines = [
      `Olá, Dr. Augusto! ${name.trim() ? `Meu nome é ${name.trim()} e g` : "G"}ostaria de agendar uma consulta ${who}.`,
      "",
      `• Motivo: ${reason}`,
    ];
    if (region.length) lines.push(`• Região: ${region.join(", ").toLowerCase()}`);
    lines.push(`• Atendimento: ${coverage === "Particular" || coverage === "Reembolso pelo plano" ? coverage.toLowerCase() : `convênio ${coverage}`}`);
    lines.push(`• Melhor período: ${period.toLowerCase()}`);
    if (note.trim()) lines.push(`• Sobre o caso: ${note.trim()}`);
    lines.push("", "Quais horários estão disponíveis?");
    return lines.join("\n");
  }, [name, patient, reason, region, coverage, period, note]);

  const ready = name.trim().length >= 2;

  return (
    <section id="agendar" className="relative py-28 md:py-44">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Heading lines={["Agendamento", "pelo WhatsApp"]} className="text-[clamp(2.4rem,4.4vw,3.6rem)] lg:col-span-6" />
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <p className="max-w-[28rem] text-[17px] leading-[1.8] text-graphite-soft">
              Preencha algumas informações e a mensagem seguirá pronta para a secretária, que retornará com os horários
              disponíveis.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="min-w-0 lg:col-span-7">
            <form
              className="space-y-11 rounded-[6px] bg-white p-6 sm:p-12"
              onSubmit={(e) => {
                e.preventDefault();
                setTouched(true);
                if (ready) window.open(waLink(doctor.whatsapp, message), "_blank", "noopener,noreferrer");
              }}
            >
              <Field label="Nome completo" htmlFor="nome">
                <input
                  id="nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  placeholder="Como gostaria de ser chamado"
                  aria-invalid={touched && !ready}
                  aria-describedby={touched && !ready ? "nome-erro" : undefined}
                  className="w-full border-0 border-b border-graphite/20 bg-transparent px-0 py-3 text-[17px] text-graphite placeholder:text-taupe/60 focus:border-stetho focus:outline-none aria-[invalid=true]:border-[#b4483c]"
                />
                {touched && !ready && (
                  <p id="nome-erro" className="mt-2 text-sm text-[#b4483c]">
                    Informe seu nome para continuar.
                  </p>
                )}
              </Field>

              <Group label="A consulta é para">
                {patients.map((p) => (
                  <Chip key={p.id} on={patient === p.id} onClick={() => setPatient(p.id)}>
                    {p.label}
                  </Chip>
                ))}
              </Group>

              <Group label="Motivo da consulta">
                {reasons.map((r) => (
                  <Chip key={r} on={reason === r} onClick={() => setReason(r)}>
                    {r}
                  </Chip>
                ))}
              </Group>

              <Group label="Região" hint="Opcional">
                {regions.map((r) => (
                  <Chip key={r} on={region.includes(r)} onClick={() => toggleRegion(r)} check>
                    {r}
                  </Chip>
                ))}
              </Group>

              <Group label="Forma de atendimento">
                {coverages.map((c) => (
                  <Chip key={c} on={coverage === c} onClick={() => setCoverage(c)}>
                    {c}
                  </Chip>
                ))}
              </Group>
              {coverage === "Reembolso pelo plano" && (
                <p className="-mt-5 text-sm text-taupe">Reembolso disponível para {listPt(clinic.refund)}.</p>
              )}

              <Group label="Período de preferência">
                {periods.map((p) => (
                  <Chip key={p} on={period === p} onClick={() => setPeriod(p)}>
                    {p}
                  </Chip>
                ))}
              </Group>

              <Field label="Observações" htmlFor="obs" hint="Opcional">
                <textarea
                  id="obs"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={3}
                  placeholder="Se desejar, descreva brevemente o que tem sentido"
                  className="w-full resize-none border-0 border-b border-graphite/20 bg-transparent px-0 py-3 text-[16px] text-graphite placeholder:text-taupe/60 focus:border-stetho focus:outline-none"
                />
              </Field>

              <button type="submit" className="btn btn-dark w-full lg:hidden">
                <WhatsAppIcon className="size-4" />
                Enviar pelo WhatsApp
              </button>
            </form>
          </Reveal>

          {/* Prévia da mensagem */}
          <Reveal delay={0.12} className="min-w-0 lg:col-span-5 lg:col-start-8">
            <div className="lg:sticky lg:top-32">
              <p className="mb-4 text-[13px] tracking-[0.06em] text-taupe">Prévia da mensagem</p>
              <div className="overflow-hidden rounded-[10px] bg-[#efeae2] shadow-[0_30px_60px_-40px_rgba(58,51,46,0.35)]">
                <div className="flex items-center gap-3 bg-white px-4 py-3">
                  <span className="grid size-10 place-items-center rounded-full bg-paper text-graphite">
                    <StethoMark className="h-6 w-auto" weight={3} />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-[15px] font-medium">{doctor.name}</span>
                    <span className="block text-xs text-taupe">{doctor.phoneDisplay}</span>
                  </span>
                  <WhatsAppIcon className="ml-auto size-5 text-[#25d366]" />
                </div>
                <div className="min-h-[300px] p-4">
                  <motion.div
                    layout
                    transition={{ duration: 0.3 }}
                    className="ml-auto max-w-[94%] rounded-xl rounded-tr-sm bg-[#d9fdd3] px-3.5 pb-2 pt-2.5 text-[14.5px] leading-relaxed text-[#111b21] shadow-[0_1px_0.5px_rgba(11,20,26,0.13)]"
                  >
                    <p className="whitespace-pre-line break-words">{message}</p>
                    <span className="mt-1 flex items-center justify-end gap-1 text-[11px] text-[#667781]">
                      agora <CheckCheck className="size-4 text-[#53bdeb]" />
                    </span>
                  </motion.div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setTouched(true);
                  if (ready) window.open(waLink(doctor.whatsapp, message), "_blank", "noopener,noreferrer");
                  else document.getElementById("nome")?.focus();
                }}
                className="btn btn-dark mt-6 hidden w-full lg:flex"
              >
                <WhatsAppIcon className="size-4" />
                Enviar pelo WhatsApp
              </button>
              <p className="mt-4 text-center text-[13px] text-taupe" aria-live="polite">
                {ready ? "A mensagem abrirá no WhatsApp, pronta para envio." : "Informe seu nome para continuar."}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, htmlFor, hint, children }: { label: string; htmlFor: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="flex items-baseline justify-between gap-3">
        <span className="text-[13px] tracking-[0.06em] text-taupe">{label}</span>
        {hint && <span className="text-[12px] text-taupe/80">{hint}</span>}
      </label>
      {children}
    </div>
  );
}

function Group({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <fieldset className="min-w-0">
      <legend className="mb-4 flex w-full items-baseline justify-between gap-3">
        <span className="text-[13px] tracking-[0.06em] text-taupe">{label}</span>
        {hint && <span className="text-[12px] text-taupe/80">{hint}</span>}
      </legend>
      <div className="flex flex-wrap gap-2">{children}</div>
    </fieldset>
  );
}

function Chip({ on, onClick, check, children }: { on: boolean; onClick: () => void; check?: boolean; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[14px] transition-colors duration-400 ${
        on ? "border-stetho bg-stetho-mist text-stetho-deep" : "border-graphite/12 text-graphite-soft hover:border-graphite/35"
      }`}
    >
      {check && (
        <span className={`grid size-3.5 place-items-center rounded-full border transition-colors ${on ? "border-stetho bg-stetho" : "border-graphite/25"}`}>
          {on && <Check className="size-2.5 text-white" strokeWidth={2.5} />}
        </span>
      )}
      {children}
    </button>
  );
}
