// Default Layout
import DefaultLayout from "~/layouts/Default.vue";

// Icons
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";

import {
  faEnvelope,
  faArrowRight,
  faCode,
  faClock,
  faTerminal,
  faCompactDisc,
} from "@fortawesome/free-solid-svg-icons";

import {
  faInstagram,
  faCodepen,
  faTwitter,
  faGithub,
  faHtml5,
  faSass,
  faPhp,
  faJs,
  faVuejs,
  faWordpressSimple,
  faNode,
} from "@fortawesome/free-brands-svg-icons";

import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

library.add(
  faInstagram,
  faCodepen,
  faTwitter,
  faGithub,
  faHtml5,
  faSass,
  faPhp,
  faJs,
  faVuejs,
  faWordpressSimple,
  faNode,
  faEnvelope,
  faArrowRight,
  faCode,
  faClock,
  faTerminal,
  faCompactDisc
);

// Styles
import "~/assets/scss/vendor/prism-synthwave84.css";
import "~/assets/scss/styles.scss";

// Plugins
import VueWaypoint from "vue-waypoint";

export default function (Vue, { router, head, isClient }) {
  Vue.component("fa", FontAwesomeIcon);
  Vue.component("Layout", DefaultLayout);
  Vue.use(VueWaypoint);

  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i|Overpass+Mono:400,700&font-display=swap",
  });

  // Global Meta
  head.meta.push(
    {
      name: "keywords",
      content:
        "Web, Web Design, Web Development, Fullstack, JAMStack, JavaScript, HTML5, CSS, Sass, Vue, Vue.js, PHP, WordPress, Engineer",
    },
    {
      key: "fb:app_id",
      property: "fb:app_id",
      content: "121082755871108",
    },
    {
      key: "og:description",
      property: "og:description",
      content:
        "Daryn St. Pierre is a Front-End Web Developer based in St. Petersburg Florida.",
    },
    {
      key: "og:type",
      property: "og:type",
      content: "website",
    },
    {
      key: "og:image",
      property: "og:image",
      content: "https://daryn.codes/og@2x.png",
    },
    {
      key: "twitter:creator",
      name: "twitter:creator",
      content: "@bloqhead",
    },
    {
      key: "twitter:site",
      name: "twitter:site",
      content: "@bloqhead",
    },
    {
      key: "twitter:card",
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      key: "twitter:image",
      name: "twitter:image",
      content: "https://daryn.codes/og@2x.png",
    },
    {
      key: "twitter:description",
      name: "twitter:description",
      content:
        "Daryn St. Pierre is a Front-End Web Developer based in St. Petersburg Florida.",
    }
  );
}
