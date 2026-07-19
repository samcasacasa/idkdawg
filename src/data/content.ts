export type NavLink = {
  label: string;
  href: string;
};

export type CtaLink = {
  label: string;
  href: string;
};

export type ProductShowcaseData = {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
  theme: "light" | "dark";
  gradient: string;
  links: CtaLink[];
};

export type PromoTileData = {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  gradient: string;
  theme: "light" | "dark";
  links: CtaLink[];
};

export type FooterColumn = {
  title: string;
  links: NavLink[];
};

export const brand = {
  name: "idkdawg",
};

export const navLinks: NavLink[] = [
  { label: "Store", href: "#" },
  { label: "Mac", href: "#" },
  { label: "iPad", href: "#" },
  { label: "iPhone", href: "#" },
  { label: "Watch", href: "#" },
  { label: "AirPods", href: "#" },
  { label: "TV & Home", href: "#" },
  { label: "Support", href: "#" },
];

export const hero = {
  eyebrow: "New",
  title: "Pro. Beyond.",
  subtitle: "The most powerful lineup ever. Built for creators, makers, and everyone in between.",
  gradient: "linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 40%, #16213e 100%)",
  links: [
    { label: "Learn more", href: "#" },
    { label: "Buy", href: "#" },
  ] satisfies CtaLink[],
};

export const showcases: ProductShowcaseData[] = [
  {
    id: "nova-phone",
    eyebrow: "New",
    title: "Nova Phone",
    subtitle: "Titanium. So strong. So light. So Pro.",
    theme: "dark",
    gradient: "linear-gradient(180deg, #1c1c1e 0%, #2c2c2e 50%, #1c1c1e 100%)",
    links: [
      { label: "Learn more", href: "#" },
      { label: "Buy", href: "#" },
    ],
  },
  {
    id: "airbook-pro",
    title: "AirBook Pro",
    subtitle: "Supercharged by the next generation of silicon.",
    theme: "light",
    gradient: "linear-gradient(180deg, #f5f5f7 0%, #e8e8ed 50%, #d2d2d7 100%)",
    links: [
      { label: "Learn more", href: "#" },
      { label: "Buy", href: "#" },
    ],
  },
  {
    id: "pulse-watch",
    title: "Pulse Watch",
    subtitle: "Smarter. Brighter. Mightier.",
    theme: "light",
    gradient: "linear-gradient(180deg, #fafafa 0%, #f0f0f5 50%, #e5e5ea 100%)",
    links: [
      { label: "Learn more", href: "#" },
      { label: "Buy", href: "#" },
    ],
  },
];

export const promoTiles: PromoTileData[] = [
  {
    id: "nova-pad",
    eyebrow: "Nova Pad Pro",
    title: "Thinpossible.",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    theme: "dark",
    links: [
      { label: "Learn more", href: "#" },
      { label: "Buy", href: "#" },
    ],
  },
  {
    id: "sound-pods",
    eyebrow: "SoundPods Pro",
    title: "Adaptive Audio. Now playing.",
    gradient: "linear-gradient(135deg, #f5f5f7 0%, #d2d2d7 100%)",
    theme: "light",
    links: [
      { label: "Learn more", href: "#" },
      { label: "Buy", href: "#" },
    ],
  },
  {
    id: "stream-tv",
    eyebrow: "Stream TV 4K",
    title: "The Apple experience. Cinematic.",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #434343 100%)",
    theme: "dark",
    links: [
      { label: "Learn more", href: "#" },
    ],
  },
  {
    id: "home-hub",
    eyebrow: "Home Hub",
    title: "Your home at your command.",
    gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    theme: "light",
    links: [
      { label: "Learn more", href: "#" },
      { label: "Buy", href: "#" },
    ],
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Shop and Learn",
    links: [
      { label: "Store", href: "#" },
      { label: "Mac", href: "#" },
      { label: "iPad", href: "#" },
      { label: "iPhone", href: "#" },
      { label: "Watch", href: "#" },
      { label: "AirPods", href: "#" },
      { label: "TV & Home", href: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Cloud+", href: "#" },
      { label: "Music", href: "#" },
      { label: "TV+", href: "#" },
      { label: "Arcade", href: "#" },
      { label: "Fitness+", href: "#" },
      { label: "News+", href: "#" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Manage Your Account", href: "#" },
      { label: "Cloud Account", href: "#" },
      { label: "Wallet", href: "#" },
    ],
  },
  {
    title: "Store",
    links: [
      { label: "Find a Store", href: "#" },
      { label: "Genius Bar", href: "#" },
      { label: "Today at Store", href: "#" },
      { label: "Financing", href: "#" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Newsroom", href: "#" },
      { label: "Leadership", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Investors", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

export const footerLegal = {
  copyright: `Copyright © ${new Date().getFullYear()} idkdawg Inc. All rights reserved.`,
  links: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Sales and Refunds", href: "#" },
    { label: "Legal", href: "#" },
    { label: "Site Map", href: "#" },
  ] satisfies NavLink[],
};
