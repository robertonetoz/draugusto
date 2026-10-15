import { hours, weekdayNames } from "@/data/site";

export function waLink(number: string, text?: string) {
  const base = `https://wa.me/${number}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function toMinutes(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

/** "a, b e c", com os itens depois do primeiro em minúsculas quando pedido */
export function listPt(items: string[], lower = false) {
  const xs = items.map((x, i) => (lower && i > 0 ? x.charAt(0).toLowerCase() + x.slice(1) : x));
  return xs.length > 1 ? `${xs.slice(0, -1).join(", ")} e ${xs[xs.length - 1]}` : (xs[0] ?? "");
}

export const hourLabel = (hhmm: string) => hhmm.replace(":00", "h").replace(/^0/, "");

/** Hora atual em Uberlândia (America/Sao_Paulo), independente do fuso do visitante */
export function nowInUberlandia() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const hour = Number(get("hour")) % 24;
  return { day: days.indexOf(get("weekday")), minutes: hour * 60 + Number(get("minute")) };
}

export function openStatus() {
  const { day, minutes } = nowInUberlandia();
  const today = hours[day];
  if (today && minutes >= toMinutes(today.open) && minutes < toMinutes(today.close)) {
    return { open: true, day, text: `Atendendo agora, até as ${hourLabel(today.close)}` };
  }
  for (let i = 0; i < 7; i++) {
    const d = (day + i) % 7;
    const h = hours[d];
    if (!h) continue;
    if (i === 0 && minutes >= toMinutes(h.open)) continue;
    const when = i === 0 ? "hoje" : i === 1 ? "amanhã" : weekdayNames[d].toLowerCase();
    return { open: false, day, text: `Fechado agora. Abre ${when} às ${hourLabel(h.open)}` };
  }
  return { open: false, day, text: "Fechado agora" };
}
