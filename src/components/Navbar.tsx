"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { brand, navLinks } from "@/data/content";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md"
        style={{
          height: "var(--nav-height)",
          backgroundColor: "var(--color-nav-bg)",
          borderColor: "var(--color-nav-border)",
        }}
      >
        <nav className="mx-auto flex h-full max-w-[1024px] items-center justify-between px-4 md:px-6">
          <a
            href="#"
            className="text-[17px] font-semibold tracking-tight text-[var(--color-text-primary)]"
            aria-label={`${brand.name} home`}
          >
            {brand.name}
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-xs text-[var(--color-text-primary)] opacity-80 transition-opacity hover:opacity-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 lg:hidden">
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-8 w-8 flex-col items-center justify-center gap-1.5"
            >
              <span
                className={clsx(
                  "block h-[1px] w-4 bg-[var(--color-text-primary)] transition-transform duration-300",
                  menuOpen && "translate-y-[3.5px] rotate-45",
                )}
              />
              <span
                className={clsx(
                  "block h-[1px] w-4 bg-[var(--color-text-primary)] transition-opacity duration-300",
                  menuOpen && "opacity-0",
                )}
              />
              <span
                className={clsx(
                  "block h-[1px] w-4 bg-[var(--color-text-primary)] transition-transform duration-300",
                  menuOpen && "-translate-y-[3.5px] -rotate-45",
                )}
              />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[var(--color-bg-light)] pt-[var(--nav-height)] lg:hidden"
          >
            <motion.ul
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="flex flex-col px-8 py-6"
            >
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + index * 0.03 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block border-b border-black/5 py-4 text-2xl font-semibold tracking-tight text-[var(--color-text-primary)]"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
