"use client";

import dynamic from "next/dynamic";

import config from "../../../../sanity.config";

/**
 * The Studio is a browser-only application, so it is loaded client-side with
 * SSR disabled. Server-rendering it would pull `sanity` into the server graph,
 * where it resolves its own copy of React and crashes on a null dispatcher
 * ("Cannot read properties of null (reading 'useMemoCache')").
 */
const NextStudio = dynamic(
  () => import("next-sanity/studio").then((mod) => mod.NextStudio),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          color: "#6b7280",
          fontSize: 14,
        }}
      >
        Loading Studio…
      </div>
    ),
  }
);

export default function Studio() {
  return <NextStudio config={config} />;
}
