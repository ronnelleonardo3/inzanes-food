"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

type FadeInProps = {
  children: React.ReactNode;
};

export default function FadeIn({
  children,
}: FadeInProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.25,
      }}
    >
      {children}
    </motion.div>
  );
}