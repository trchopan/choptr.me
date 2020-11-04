import { title, meta, link, script } from "./headers.js";

export default {
  vue: {
    config: {
      productionTip: false,
      devtools: true,
    },
  },
  mode: "universal",
  head: {
    title,
    meta,
    link,
    script,
  },
  components: true,
  loading: { color: "#fff" },
  css: [],
  plugins: [{ src: "~/plugins/vue-typer.js", mode: "client" }],
  buildModules: [],
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/google-analytics",
    "@nuxtjs/style-resources",
    "@nuxtjs/markdownit",
  ],
  googleAnalytics: {
    id: "UA-148449545-1",
  },
  styleResources: {
    scss: ["./assets/styles.scss"],
  },
  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    use: ["markdown-it-div", "markdown-it-attrs"],
  },
  axios: {},
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.ya?ml$/,
        use: "js-yaml-loader",
      });
    },
  },
};
