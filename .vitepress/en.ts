import { defineConfig, type DefaultTheme } from "vitepress";

export const en = defineConfig({
  title: "Mirai Documentation",
  lang: "en",

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/en/guide/": { base: "/en/guide/", items: sidebarGuide() },
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "Guide",
      link: "/en/guide/what-is-mirai",
    },
  ];
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Introduction",
      collapsed: false,
      items: [
        { text: "What is Mirai?", link: "what-is-mirai" },
        { text: "Getting Started", link: "getting-started" },
      ],
    },
  ];
}
