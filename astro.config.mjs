// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'http://reysin.fr',
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
            {
                label: 'Ready to use modules',
                items: [
                    {
                        label: 'Introduction',
                        slug: 'ready_to_use_modules/introduction',
                    },
                    {
                        label: 'Config Modules',
                        autogenerate: { directory: 'ready_to_use_modules/config' }
                    }
                ]
            }
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