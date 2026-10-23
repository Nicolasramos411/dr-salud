import { describe, expect, it } from 'vitest';
import { isRateLimited } from '@/lib/rate-limit';

describe('isRateLimited', () => {
  it('allows up to the limit and then blocks', () => {
    const key = 'ip-a';
    const results = Array.from({ length: 6 }, () => isRateLimited(key, 5, 1000, 0));
    expect(results).toEqual([false, false, false, false, false, true]);
  });

  it('allows again once the window has passed', () => {
    const key = 'ip-b';
    for (let i = 0; i < 5; i++) isRateLimited(key, 5, 1000, 0);
    expect(isRateLimited(key, 5, 1000, 500)).toBe(true);
    expect(isRateLimited(key, 5, 1000, 1500)).toBe(false);
  });

  it('keeps keys independent', () => {
    for (let i = 0; i < 5; i++) isRateLimited('ip-c', 5, 1000, 0);
    expect(isRateLimited('ip-d', 5, 1000, 0)).toBe(false);
  });
});
