import { ImageResponse } from 'next/og';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

// Neutral favicon (navy square) until the client approves one. It never alters the logo.
export default function Icon() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', background: '#000468' }} />,
    size,
  );
}
