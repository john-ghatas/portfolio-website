import { ReactNode } from "react";
import { motion, easeInOut } from "framer-motion";

export interface FadeUpProps {
  children: ReactNode;
  duration: number;
  delay?: number;
  whileInView?: boolean;
}

export default function FadeUp({
  children,
  duration,
  delay,
  whileInView = false,
}: FadeUpProps) {
  const animation = {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: easeInOut, // ✅ type-safe
      delay,
    },
  };

  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={whileInView ? animation : undefined}
      animate={!whileInView ? animation : undefined}
    >
      {children}
    </motion.div>
  );
}
