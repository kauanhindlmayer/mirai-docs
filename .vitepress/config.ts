import { defineConfig } from "vitepress";
import { en } from "./en";
import { pt } from "./pt";
import { shared } from "./shared";

export default defineConfig({
  ...shared,
  locales: {
    en: { label: "English", ...en },
    pt: { label: "Português", ...pt },
  },
});
