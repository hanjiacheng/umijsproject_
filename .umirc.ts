import { defineConfig } from "umi";

export default defineConfig({
  nodeModulesTransform: {
    type: "none"
  },
  routes: [
    { path: "/", component: "@/pages/bar" },
    { path: "/index", component: "@/pages/index" },
    { path: "/list", component: "@/pages/bar" }
  ],
  layout: {}
});
