"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { doctor } from "@/data/site";
import { waLink } from "@/lib/utils";
import { WhatsAppIcon } from "./Icons";

/** Botão de WhatsApp que aparece depois do topo da página */
export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={waLink(doctor.whatsapp, "Olá, Dr. Augusto! Vim pelo site e gostaria de agendar uma consulta.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Conversar no WhatsApp"
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-5 right-5 z-40 grid size-12 place-items-center rounded-full border border-graphite/10 bg-paper/95 text-[#1fa855] shadow-[0_12px_30px_-14px_rgba(58,51,46,0.45)] backdrop-blur transition-colors hover:bg-white md:bottom-8 md:right-8"
        >
          <WhatsAppIcon className="size-[22px]" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
