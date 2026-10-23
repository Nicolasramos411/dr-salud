// Usage: npx tsx gen-image.ts <model> <out-name> <prompt> [key=value ...]   e.g. resolution=1080p aspect_ratio=4:3
import { config as loadEnv } from 'dotenv';
import { higgsfield } from '@higgsfield/client/v2';
import { writeFile } from 'node:fs/promises';

loadEnv({ path: '.env.local', quiet: true });

const [model, name, prompt, ...kv] = process.argv.slice(2);
const input: Record<string, unknown> = {
  prompt,
  ...Object.fromEntries(kv.map((p) => p.split('=') as [string, string])),
};

const res: any = await higgsfield.subscribe(model, { input, withPolling: true });
const urls: string[] = (res.images ?? []).map((i: any) => i.url);
if (res.status !== 'completed' || !urls.length) {
  console.error(`${name}: status "${res.status}" (request ${res.request_id}); nothing saved.`);
  process.exit(1);
}
for (const [i, url] of urls.entries()) {
  const buf = Buffer.from(await (await fetch(url)).arrayBuffer());
  const ext = url.split('?')[0].split('.').pop() || 'jpg';
  const file = `assets/gen/${name}${urls.length > 1 ? `-${i + 1}` : ''}.${ext}`;
  await writeFile(file, buf);
  console.log(file);
}
