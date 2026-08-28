import type { Metadata } from "next";
import { notFound } from "next/navigation";

import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getSiteSettings } from "@/content/site";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const settings = await getSiteSettings(isLocale(locale) ? locale : "en");

  return {
    title: `${settings.brandName} — ITL`,
    description: settings.footerBlurb,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const settings = await getSiteSettings(locale as Locale);

  return (
    <html lang={locale}>
      <body>
        <Header locale={locale as Locale} settings={settings} />
        <main className="pt-16">{children}</main>
        <Footer locale={locale as Locale} settings={settings} />
      </body>
    </html>
  );
}
