import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'HerNetworkingHub - Exclusive Women\'s Community',
    short_name: 'HerNetworkingHub',
    description: 'Connect with powerhouse women entrepreneurs, founders, and business leaders.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1A1A2E',
    theme_color: '#FF007F',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
