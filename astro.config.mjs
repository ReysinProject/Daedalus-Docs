// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'Daedalus',
        social: {
            github: 'https://github.com/ReysinProject/Daedalus',
        },
        sidebar: [
            {
                label: 'Introduction',
                slug: 'introduction',
            },
            {
                label: 'Basics',
                autogenerate: { directory: 'basics'}
            },
            {
                label: 'Reference',
                autogenerate: { directory: 'reference' },
            },
        ],
        customCss: [
            './src/tailwind.css',
        ]
    }),
        tailwind({
            applyBaseStyles: false,
        })
    ],
});