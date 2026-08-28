import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale, locales } from "./i18n/config";

/** Remembers the visitor's language choice across sessions. */
const COOKIE = "NEXT_LOCALE";

/** Paths that are not locale-prefixed pages. */
const EXCLUDED = /^\/(?:studio|api|_next|favicon\.ico|.*\..*)/;

/** Pick the best supported locale from the browser's Accept-Language header. */
function detectLocale(request: NextRequest): string {
  const header = request.headers.get("accept-language");
  if (!header) return defaultLocale;

  const preferred = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { tag: tag.toLowerCase(), q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of preferred) {
    const base = tag.split("-")[0];
    const match = locales.find((locale) => locale === base);
    if (match) return match;
  }

  return defaultLocale;
}

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (EXCLUDED.test(pathname)) return NextResponse.next();

  const active = locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  // Already on a locale URL: remember the choice so later visits to an
  // unprefixed path land in the same language.
  if (active) {
    const response = NextResponse.next();
    if (request.cookies.get(COOKIE)?.value !== active) {
      response.cookies.set(COOKIE, active, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
      });
    }
    return response;
  }

  // Honour a previously chosen language before sniffing the browser's.
  const saved = request.cookies.get(COOKIE)?.value;
  const locale =
    saved && locales.some((l) => l === saved) ? saved : detectLocale(request);

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|studio|favicon.ico).*)"],
};
