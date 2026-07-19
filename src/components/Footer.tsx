import { footerColumns, footerLegal } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-muted)] px-6 pb-8 pt-12 text-[12px] leading-relaxed text-[var(--color-text-secondary)]">
      <div className="mx-auto max-w-[980px]">
        <p className="mb-8 border-b border-[#d2d2d7] pb-6 text-[11px] leading-[1.33337]">
          Placeholder content for demonstration. Product names and features are fictional.
        </p>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-2 text-[12px] font-semibold text-[var(--color-text-primary)]">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="transition-colors hover:text-[var(--color-text-primary)] hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-[#d2d2d7] pt-6">
          <p className="mb-2">{footerLegal.copyright}</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1">
            {footerLegal.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-[var(--color-text-primary)] hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
