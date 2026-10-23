const hits = new Map<string, number[]>();

/**
 * Basic sliding-window limiter, in memory.
 * ponytail: per serverless instance, so it is best effort on Vercel; use Upstash/KV if abuse appears.
 */
export function isRateLimited(key: string, limit = 5, windowMs = 10 * 60 * 1000, now = Date.now()) {
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= limit) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  return false;
}
