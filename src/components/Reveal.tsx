"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

export const ease = [0.22, 1, 0.36, 1] as const;

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
  children: ReactNode;
};

/** Aparece com calma quando o bloco chega na tela */
export function Reveal({ delay = 0, y = 16, children, ...rest }: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 1.2, ease, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Título que surge linha a linha, devagar */
export function Heading({
  lines,
  as: Tag = "h2",
  className = "",
}: {
  lines: ReactNode[];
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[Tag];
  return (
    <MotionTag
      className={`display ${className}`}
      initial={reduce ? false : "hidden"}
      whileInView="shown"
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
    >
      {lines.map((line, i) => (
        <span key={i} className="block">
          <motion.span
            className="block"
            variants={{ hidden: { opacity: 0, y: 14 }, shown: { opacity: 1, y: 0 } }}
            transition={{ duration: 1.3, ease, delay: i * 0.12 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
