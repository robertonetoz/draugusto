"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { doctor, navLinks } from "@/data/site";
import { InstagramIcon, Logo, WhatsAppIcon } from "./Icons";
import { waLink } from "@/lib/utils";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-700 ${
        scrolled ? "bg-paper/95 py-3 shadow-[0_1px_0_rgba(58,51,46,0.06)] md:bg-paper/85 md:backdrop-blur-md" : "py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 md:px-10" aria-label="Principal">
        <a href="#topo" className="relative z-10 shrink-0" aria-label="Dr. Augusto César Borges, início">
          <Logo />
        </a>

        <ul className="hidden items-center gap-10 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-[13.5px] tracking-[0.04em] text-graphite-soft transition-colors duration-300 hover:text-stetho">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={doctor.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram do Dr. Augusto"
            className="grid size-10 place-items-center rounded-full text-graphite-soft transition-colors hover:text-stetho"
          >
            <InstagramIcon className="size-[18px]" />
          </a>
          <a href="#agendar" className="btn btn-line !min-h-10 !px-6 !py-2 text-[13px]">
            Agendar consulta
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="relative z-10 flex h-11 w-11 flex-col items-center justify-center gap-[6px] lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          <span className={`block h-px w-6 bg-graphite transition-transform duration-500 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-graphite transition-transform duration-500 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            data-lenis-prevent
            className="fixed inset-0 flex flex-col bg-paper px-6 pb-10 pt-32 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a href={l.href} onClick={() => setOpen(false)} className="display block py-2.5 text-[2.4rem]">
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto grid gap-3">
              <a href="#agendar" onClick={() => setOpen(false)} className="btn btn-dark">
                Agendar consulta
              </a>
              <a href={waLink(doctor.whatsapp)} target="_blank" rel="noopener noreferrer" className="btn btn-line">
                <WhatsAppIcon className="size-4" /> {doctor.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
