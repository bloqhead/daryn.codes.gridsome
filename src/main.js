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
import "./assets/scss/vendor/prism-synthwave84.css";
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
}
