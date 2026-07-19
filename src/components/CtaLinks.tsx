import type { CtaLink } from "@/data/content";

type CtaLinksProps = {
  links: CtaLink[];
  className?: string;
};

export default function CtaLinks({ links, className = "" }: CtaLinksProps) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-6 ${className}`}>
      {links.map((link) => (
        <a key={link.label} href={link.href} className="apple-link">
          {link.label}
        </a>
      ))}
    </div>
  );
}
