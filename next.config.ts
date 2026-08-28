import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io", pathname: "/**" },
    ],
    // Icons in this project are SVGs, which editors upload through the Studio.
    // The accompanying CSP is Next's recommended mitigation: served SVGs are
    // sandboxed and cannot execute scripts.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
