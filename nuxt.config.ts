// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  modules: ["@nuxtjs/strapi"],
  strapi: {
    url: process.env.STRAPI_URL || "http://localhost:1337",
  },
};
