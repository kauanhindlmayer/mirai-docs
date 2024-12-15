import { defineConfig } from "vitepress";

export const shared = defineConfig({
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  themeConfig: {
    siteTitle: "Mirai Documentation",
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/kauanhindlmayer/mirai-api" },
    ],
  },
});
