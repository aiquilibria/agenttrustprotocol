import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Agent Trust Protocol',
  description: 'An open protocol for verifiable AI agent task execution.',
  base: '/',
  srcExclude: ['internal/**'],

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { property: 'og:title', content: 'Agent Trust Protocol' }],
    ['meta', { property: 'og:description', content: 'An open protocol for verifiable AI agent task execution.' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://agenttrustprotocol.org' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Specification', link: '/spec/v0.1' },
      { text: 'Changelog', link: '/changelog' },
      { text: 'Contributing', link: '/contributing' },
      { text: 'FAQ', link: '/faq' },
    ],

    sidebar: {
      '/spec/': [
        {
          text: 'ATP Specification',
          items: [
            { text: 'v0.1 (current)', link: '/spec/v0.1' },
          ],
        },
        {
          text: 'On this page',
          items: [
            { text: 'Abstract', link: '/spec/v0.1#abstract' },
            { text: '1. Introduction', link: '/spec/v0.1#1-introduction' },
            { text: '2. Terminology', link: '/spec/v0.1#2-terminology' },
            { text: '3. Architecture', link: '/spec/v0.1#3-architecture-overview' },
            { text: '4. System Types', link: '/spec/v0.1#4-atp-compliant-system-types' },
            { text: '5. Proof Structure', link: '/spec/v0.1#5-proof-structure' },
            { text: '6. Task Classification', link: '/spec/v0.1#6-task-classification-ontology' },
            { text: '7. Communication', link: '/spec/v0.1#7-communication-protocols' },
            { text: '8. Core Patterns', link: '/spec/v0.1#8-core-patterns' },
            { text: '9. Verification', link: '/spec/v0.1#9-verification-assessment' },
            { text: '10. Authorization', link: '/spec/v0.1#10-authorization' },
            { text: '11. ATP Exchange', link: '/spec/v0.1#11-atp-exchange' },
            { text: '12. API Specifications', link: '/spec/v0.1#12-api-specifications' },
            { text: '13. Security', link: '/spec/v0.1#13-security-considerations' },
            { text: '14. Implementation', link: '/spec/v0.1#14-implementation-requirements' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aiquilibria/agenttrustprotocol' },
    ],

    search: {
      provider: 'local',
    },

    footer: {
      message: 'Released under the <a href="https://www.apache.org/licenses/LICENSE-2.0">Apache 2.0 License</a>.',
      copyright: 'Copyright © 2026 AIquilibria',
    },

    banner: {
      dismissable: false,
      text: '⚠️ ATP v0.1.0 is a draft specification. It may change before final release.',
    },
  },
})
