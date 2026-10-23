import { config as loadEnv } from 'dotenv';
import { higgsfield } from '@higgsfield/client/v2';

loadEnv({ path: '.env.local', quiet: true }); // HF_CREDENTIALS is read from env by the SDK

const res: any = await higgsfield.subscribe('bytedance/seedance-2.5/text-to-video', {
  input: {
    prompt: 'A cinematic scene at sunset',
    duration: 5,
    resolution: '720p',
    aspect_ratio: '16:9',
  },
  withPolling: true,
});

// subscribe() returns the raw v2 response: { status, request_id, video?: { url } }
const url = res.video?.url;
if (res.status === 'completed' && url) {
  console.log('Video URL:', url);
} else {
  console.error(
    `Generation ended with status "${res.status}" (request ${res.request_id}); no video produced.`,
  );
  process.exit(1);
}
