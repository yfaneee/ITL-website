"use client";

import { NextStudio } from "next-sanity/studio";

import config from "../../../../sanity.config";

/**
 * Kept behind a client boundary: the Studio and its schema config rely on
 * React APIs (createContext) that are unavailable in the react-server runtime.
 */
export default function Studio() {
  return <NextStudio config={config} />;
}
