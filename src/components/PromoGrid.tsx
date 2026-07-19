"use client";

import { motion } from "framer-motion";
import type { PromoTileData } from "@/data/content";
import { promoTiles } from "@/data/content";
import CtaLinks from "./CtaLinks";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function PromoTile({ tile }: { tile: PromoTileData }) {
  const isDark = tile.theme === "dark";

  return (
    <motion.article
      variants={fadeUp}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex min-h-[500px] flex-col items-center justify-start overflow-hidden px-6 py-14 text-center md:min-h-[580px]"
      style={{ background: tile.gradient }}
    >
      <div
        className="relative z-10 flex max-w-md flex-col items-center gap-2"
        style={{ color: isDark ? "#f5f5f7" : "var(--color-text-primary)" }}
      >
        {tile.eyebrow && (
          <p className="text-sm font-semibold tracking-wide opacity-90">{tile.eyebrow}</p>
        )}
        <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">{tile.title}</h3>
        {tile.subtitle && (
          <p
            className="text-lg"
            style={{ color: isDark ? "#a1a1a6" : "var(--color-text-secondary)" }}
          >
            {tile.subtitle}
          </p>
        )}
        <div className="mt-3">
          <CtaLinks links={tile.links} />
        </div>
      </div>
    </motion.article>
  );
}

export default function PromoGrid() {
  return (
    <section className="bg-[var(--color-bg-muted)]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        transition={{ staggerChildren: 0.08 }}
        className="mx-auto grid max-w-[1400px] grid-cols-1 gap-3 p-3 md:grid-cols-2"
      >
        {promoTiles.map((tile) => (
          <PromoTile key={tile.id} tile={tile} />
        ))}
      </motion.div>
    </section>
  );
}
