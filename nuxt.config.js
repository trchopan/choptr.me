import { title, meta, link, script } from "./headers.js";

export default {
  vue: {
    config: {
      productionTip: false,
      devtools: true,
    },
  },
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title,
    meta,
    link,
    script,
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/components.js",
    { src: "~/plugins/vue-typer.js", mode: "client" },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
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
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.ya?ml$/,
        use: "js-yaml-loader",
      });
    },
  },
};
