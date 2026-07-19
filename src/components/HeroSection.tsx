"use client";

import { motion } from "framer-motion";
import { hero } from "@/data/content";
import CtaLinks from "./CtaLinks";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center overflow-hidden pt-[var(--nav-height)] text-white"
      style={{ background: hero.gradient }}
    >
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-8 pt-16 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
          className="flex max-w-[var(--max-content-width)] flex-col items-center gap-3"
        >
          {hero.eyebrow && (
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="apple-eyebrow text-[#2997ff]"
            >
              {hero.eyebrow}
            </motion.p>
          )}
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="apple-headline"
          >
            {hero.title}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="apple-subheadline max-w-xl text-[#a1a1a6]"
          >
            {hero.subtitle}
          </motion.p>
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-4"
          >
            <CtaLinks links={hero.links} />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="relative mx-auto w-full max-w-4xl px-6 pb-16"
      >
        <div className="relative mx-auto aspect-[16/10] w-full max-w-3xl">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-[#3a3a3c] to-[#1c1c1e] shadow-2xl shadow-black/40" />
          <div className="absolute inset-[8%] rounded-[1.5rem] bg-gradient-to-br from-[#636366] via-[#48484a] to-[#2c2c2e]" />
          <div className="absolute left-1/2 top-[12%] h-[3%] w-[20%] -translate-x-1/2 rounded-full bg-black/60" />
          <div className="absolute bottom-[10%] left-1/2 h-[6%] w-[6%] -translate-x-1/2 rounded-full border-2 border-white/20 bg-black/30" />
        </div>
      </motion.div>
    </section>
  );
}
