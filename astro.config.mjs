import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isNetlify = process.env.NETLIFY === 'true';

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ],
  site: isNetlify ? process.env.URL ?? 'https://hoccomuslimcouncil.netlify.app' : 'https://abidiar.github.io',
  base: isNetlify ? '/' : '/hcmc'
});
