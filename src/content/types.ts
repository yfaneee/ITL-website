import type { SiteImage } from "@/sanity/image";

/** Shapes below describe content *after* locale resolution — plain strings. */

export type Cta = {
  label: string;
  href: string;
};

export type Hero = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  backgroundImage: SiteImage | null;
  primaryCta?: Cta;
  secondaryCta?: Cta;
};

export type { SiteImage };
