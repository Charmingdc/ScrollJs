import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '274'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'e15'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'be1'),
            routes: [
              {
                path: '/docs/animations/list-of-supported-animations-classes',
                component: ComponentCreator('/docs/animations/list-of-supported-animations-classes', 'd6e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/animations/using-built-in-css-animations',
                component: ComponentCreator('/docs/animations/using-built-in-css-animations', 'ebf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/built-in-animation-classes',
                component: ComponentCreator('/docs/category/built-in-animation-classes', '7c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/core-methods',
                component: ComponentCreator('/docs/category/core-methods', '3bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/getting-started',
                component: ComponentCreator('/docs/category/getting-started', '4e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/live-demos',
                component: ComponentCreator('/docs/category/live-demos', 'a5a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/initialization',
                component: ComponentCreator('/docs/getting-started/initialization', 'eb3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/installation',
                component: ComponentCreator('/docs/getting-started/installation', '1af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/live-demos/built-in-css-demos',
                component: ComponentCreator('/docs/live-demos/built-in-css-demos', 'e27'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/live-demos/disconnect-method-demo',
                component: ComponentCreator('/docs/live-demos/disconnect-method-demo', '8c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/live-demos/observe-method-demos',
                component: ComponentCreator('/docs/live-demos/observe-method-demos', '4ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/live-demos/unobserve-method-demo',
                component: ComponentCreator('/docs/live-demos/unobserve-method-demo', '1e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/methods/disconnect-method',
                component: ComponentCreator('/docs/methods/disconnect-method', 'a1c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/methods/observe-method',
                component: ComponentCreator('/docs/methods/observe-method', 'fe2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/methods/unobserve-method',
                component: ComponentCreator('/docs/methods/unobserve-method', '7ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/playground',
                component: ComponentCreator('/docs/playground', '23e'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
