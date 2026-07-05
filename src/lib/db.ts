import { getCloudflareContext } from "@opennextjs/cloudflare";

export function getDB() {
  const { env } = getCloudflareContext();

  return env.DB;
}