import "server-only";

import { draftMode } from "next/headers";
import { client } from "@/lib/sanity/client";

const DEFAULT_PARAMS = {};
const DEFAULT_TAGS = [];

export const token = process.env.SANITY_API_READ_TOKEN;

export async function sanityFetch({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
}) {
  const { isEnabled } = await draftMode();
  const isDraftMode = isEnabled;

  if (isDraftMode && !token) {
    throw new Error(
      "The `SANITY_API_READ_TOKEN` environment variable is required."
    );
  }

  const isDevelopment = process.env.NODE_ENV === "development";

  return client
    .withConfig({ useCdn: true })
    .fetch(query, params, {
      cache: isDevelopment || isDraftMode ? undefined : "force-cache",
      ...(isDraftMode && {
        token,
        perspective: "previewDrafts",
      }),
      next: {
        ...(isDraftMode && { revalidate: 30 }),
        tags,
      },
    });
}
