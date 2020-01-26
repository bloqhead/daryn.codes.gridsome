// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

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

import "./assets/scss/vendor/prism-synthwave84.css";

import "~/assets/scss/styles.scss";

export default function(Vue, { router, head, isClient }) {
  Vue.component("fa", FontAwesomeIcon);
  Vue.component("Layout", DefaultLayout);

  head.link.push({
    rel: "stylesheet",
    href:
      "//fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i|Overpass+Mono:400,700&font-display=swap"
  });
}
