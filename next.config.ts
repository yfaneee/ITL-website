import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sanity Studio is a browser-only app that pulls in packages (swr) which
  // expose no server entry point. Keeping it external stops the RSC graph
  // from trying to resolve it under the "react-server" condition.
  serverExternalPackages: ["sanity"],
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
