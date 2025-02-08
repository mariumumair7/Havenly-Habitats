
// sanityClient.ts
import { createClient } from '@sanity/client';
import dotenv from "dotenv"

dotenv.config()
export const client = createClient({
  projectId: "08j139ix", // Replace with your project ID
  dataset: 'production',        // Or your dataset name
  apiVersion: '2025-02-05',     // Today's date or latest API version
  useCdn: false,                // Disable CDN for real-time updates
  token: "skXHVnDGLo1xBY6D31r15DT446HFXVMtG574RU8wLfdZ12tRPdM1Ah7FPDYVCVhgqCYq2I9L4WvlR2tb828TrQwR8d1F4YXMiriEY5gfLY5BeC3n0ozY3zdJxs7Ju2aPeTghXKaMox2gsuaBzVWdv7hcsCWQPJGZqLfz6HIvBrijwrKyUUAL"
  ,
});
