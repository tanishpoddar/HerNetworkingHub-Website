import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'HerNetworkingHub - Exclusive Women\'s Community | Network • Grow • Succeed',
    short_name: 'HerNetworkingHub',
    description: 'Join the premier exclusive community for ambitious women entrepreneurs, founders, investors, and business leaders. Connect with powerhouse women worldwide.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait-primary',
    background_color: '#1A1A2E',
    theme_color: '#FF007F',
    categories: ['business', 'networking', 'social', 'lifestyle'],
    lang: 'en-US',
    dir: 'ltr',
    icons: [
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
