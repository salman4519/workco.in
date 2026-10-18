import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} | ${site.tagline}`,
    short_name: site.name,
    description: site.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF9F7',
    theme_color: '#0E0E0E',
    icons: [{ src: '/icon.png', sizes: '512x512', type: 'image/png' }],
  };
}
