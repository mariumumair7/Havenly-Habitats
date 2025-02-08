"use client";

import { NextStudio } from 'next-sanity/studio';
import defineConfig from '../../../../sanity.config.js'; // 4 levels up from src/app/studio/[[...tool]]/page.tsx

export default function StudioPage() {
  return <NextStudio config={defineConfig} />; // ✅ No need to cast config
}
