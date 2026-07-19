"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { ProductShowcaseData } from "@/data/content";
import CtaLinks from "./CtaLinks";

type ProductShowcaseProps = {
  data: ProductShowcaseData;
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function ProductVisual({ id, gradient }: { id: string; gradient: string }) {
  const visuals: Record<string, ReactNode> = {
    "nova-phone": (
      <div className="relative mx-auto aspect-[9/16] w-full max-w-[280px]">
        <div
          className="absolute inset-0 rounded-[2.5rem] shadow-xl"
          style={{ background: gradient }}
        />
        <div className="absolute inset-[3%] rounded-[2rem] bg-gradient-to-b from-[#2c2c2e] to-[#1c1c1e]" />
        <div className="absolute left-1/2 top-[2%] h-[1.2%] w-[28%] -translate-x-1/2 rounded-full bg-black" />
        <div className="absolute bottom-[2%] left-1/2 h-[4%] w-[4%] -translate-x-1/2 rounded-full border border-white/10" />
      </div>
    ),
    "airbook-pro": (
      <div className="relative mx-auto aspect-[16/10] w-full max-w-[640px]">
        <div className="absolute inset-x-[5%] bottom-0 top-[8%] rounded-t-xl bg-gradient-to-b from-[#86868b] to-[#636366] shadow-2xl" />
        <div className="absolute inset-x-[7%] top-[10%] bottom-[12%] rounded-t-lg bg-gradient-to-br from-[#1d1d1f] to-[#000]" />
        <div className="absolute inset-x-0 bottom-0 h-[8%] rounded-b-lg bg-gradient-to-b from-[#d2d2d7] to-[#a1a1a6]" />
      </div>
    ),
    "pulse-watch": (
      <div className="relative mx-auto aspect-square w-full max-w-[320px]">
        <div className="absolute inset-[15%] rounded-full bg-gradient-to-br from-[#ff6b6b] via-[#ee5a24] to-[#c0392b] shadow-xl" />
        <div className="absolute inset-[22%] rounded-full bg-[#1c1c1e]" />
        <div className="absolute inset-[30%] rounded-full bg-gradient-to-br from-[#2c2c2e] to-[#1c1c1e]" />
        <div className="absolute left-1/2 top-[8%] h-[12%] w-[8%] -translate-x-1/2 rounded-md bg-[#636366]" />
        <div className="absolute bottom-[8%] left-1/2 h-[12%] w-[8%] -translate-x-1/2 rounded-md bg-[#636366]" />
      </div>
    ),
  };

  return <>{visuals[id] ?? <div className="mx-auto h-64 w-full max-w-lg rounded-2xl" style={{ background: gradient }} />}</>;
}

export default function ProductShowcase({ data }: ProductShowcaseProps) {
  const isDark = data.theme === "dark";

  return (
    <section
      className="flex flex-col items-center px-6 py-16 md:py-20"
      style={{
        backgroundColor: isDark ? "var(--color-bg-dark)" : "var(--color-bg-light)",
        color: isDark ? "#f5f5f7" : "var(--color-text-primary)",
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ staggerChildren: 0.1 }}
        className="flex w-full max-w-[var(--max-content-width)] flex-col items-center text-center"
      >
        {data.eyebrow && (
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="apple-eyebrow mb-1 text-[#2997ff]"
          >
            {data.eyebrow}
          </motion.p>
        )}
        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="apple-headline"
        >
          {data.title}
        </motion.h2>
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={clsxSubheadline(isDark)}
        >
          {data.subtitle}
        </motion.p>
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-4"
        >
          <CtaLinks links={data.links} />
        </motion.div>
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-10 w-full md:mt-14"
        >
          <ProductVisual id={data.id} gradient={data.gradient} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function clsxSubheadline(isDark: boolean) {
  return `apple-subheadline mt-2 ${isDark ? "text-[#a1a1a6]" : "text-[var(--color-text-secondary)]"}`;
}
