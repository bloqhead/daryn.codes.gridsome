// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Daryn St. Pierre - Front-End Web Developer",
  siteDescription:
    "Daryn St. Pierre is a Front-End Web Developer based in St. Petersburg Florida.",
  plugins: [
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-2478113-11"
      }
    },
    {
      use: "gridsome-plugin-pwa",
      options: {
        title: "Daryn St. Pierre - Front-End Web Developer",
        startUrl: "/",
        display: "standalone",
        statusBarStyle: "default",
        manifestPath: "manifest.json",
        disableServiceWorker: true,
        serviceWorkerPath: "service-worker.js",
        cachedFileTypes: "js,json,css,html,png,jpg,jpeg,svg",
        shortName: "daryn.codes",
        themeColor: "#f54768",
        backgroundColor: "#000000",
        icon: "./src/icon.png",
        msTileImage: "",
        msTileColor: "#f54768"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/posts/**/*.md",
        typeName: "Post",
        route: "/journal/:slug"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/work/**/*.md",
        typeName: "Work",
        route: "/work/:slug"
      }
    }
  ],
  transformers: {
    // Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      plugins: ["@gridsome/remark-prismjs"]
    }
  }
};
