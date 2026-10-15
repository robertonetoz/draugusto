"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/** Respeita "reduzir movimento" do sistema em todas as animações */
export default function MotionRoot({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
