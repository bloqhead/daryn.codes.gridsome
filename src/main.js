// Default Layout
import DefaultLayout from "~/layouts/Default.vue";

// Icons
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";

import {
  faEnvelope,
  faArrowRight,
  faCode,
  faClock
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
  faWordpressSimple
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
  faEnvelope,
  faArrowRight,
  faCode,
  faClock
);

// Styles
import "~/assets/scss/vendor/prism-synthwave84.css";
import "~/assets/scss/styles.scss";

export default function(Vue, { router, head, isClient }) {
  Vue.component("fa", FontAwesomeIcon);
  Vue.component("Layout", DefaultLayout);

  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i|Overpass+Mono:400,700&font-display=swap"
  });

  // Global Meta
  head.meta.push({
    name: "keywords",
    content: "Web, Web Design, JavaScript, HTML5, CSS, Sass, Vue.js"
  });

  // OpenGraph tags
  head.meta.push({
    key: "fb:app_id",
    property: "fb:app_id",
    content: "121082755871108"
  });

  head.meta.push({
    key: "og:description",
    property: "og:description",
    content:
      "Daryn St. Pierre is a Front-End Web Developer based in St. Petersburg Florida."
  });

  head.meta.push({
    key: "og:type",
    property: "og:type",
    content: "website"
  });

  head.meta.push({
    key: "og:image",
    property: "og:image",
    content: "https://daryn.codes/og@2x.png"
  });

  head.meta.push({
    key: "twitter:creator",
    name: "twitter:creator",
    content: "@bloqhead"
  });

  head.meta.push({
    key: "twitter:site",
    name: "twitter:site",
    content: "@bloqhead"
  });

  head.meta.push({
    key: "twitter:card",
    name: "twitter:card",
    content: "summary_large_image"
  });

  head.meta.push({
    key: "twitter:image",
    name: "twitter:image",
    content: "https://daryn.codes/og@2x.png"
  });

  head.meta.push({
    key: "twitter:description",
    name: "twitter:description",
    content:
      "Daryn St. Pierre is a Front-End Web Developer based in St. Petersburg Florida."
  });

  /**
   * This doesn't actually work. For now, `og:url` is handled
   * in each individual page and component. A bit annoying.
   */

  // router.beforeEach((to, from, next) => {
  //   head.meta.push({
  //     key: "og:url",
  //     property: "og:url",
  //     content: "https://daryn.codes" + to.path
  //   });

  //   console.log(head.meta);

  //   next();
  // });
}
