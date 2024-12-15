import { defineConfig, type DefaultTheme } from "vitepress";

export const pt = defineConfig({
  title: "Documentação Mirai",
  lang: "pt",

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/pt/guide/": { base: "/pt/guide/", items: sidebarGuide() },
    },

    docFooter: {
      prev: "Anterior",
      next: "Próximo",
    },

    outline: {
      label: "Nesta página",
    },

    lastUpdated: {
      text: "Atualizado em",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    langMenuLabel: "Alterar Idioma",
    returnToTopLabel: "Voltar ao Topo",
    sidebarMenuLabel: "Menu Lateral",
    darkModeSwitchLabel: "Tema Escuro",
    lightModeSwitchTitle: "Mudar para Modo Claro",
    darkModeSwitchTitle: "Mudar para Modo Escuro",
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "Guia",
      link: "/pt/guide/what-is-mirai",
    },
  ];
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Introdução",
      collapsed: false,
      items: [
        { text: "O que é Mirai?", link: "what-is-mirai" },
        { text: "Iniciando", link: "getting-started" },
      ],
    },
  ];
}
