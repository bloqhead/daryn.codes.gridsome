<template>
  <div class="page-header" itemscope itemtype="http://schema.org/Organization">
    <g-link to="/" exact class="logo-link" itemprop="url" tabindex="0">
      <logo />
    </g-link>

    <button
      type="button"
      aria-label="Menu"
      aria-controls="menu"
      :aria-expanded="isExpanded.toString()"
      id="hamburger"
      class="hamburger hamburger--collapse"
      :class="{ 'is-active': isActive }"
      @click="toggleState"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
      <span class="sr-only">Menu</span>
    </button>
    <!-- .hamburger -->

    <nav
      id="menu"
      class="menu menu--main"
      role="navigation"
      aria-labelledby="hamburger"
      :class="{ 'is-active': isActive }"
    >
      <ul>
        <li>
          <g-link
            @click.native="restingState"
            to="/"
            exact
            tabindex="1"
            class="menu__link"
            >Home</g-link
          >
        </li>
        <li>
          <g-link
            @click.native="restingState"
            to="/work/"
            tabindex="2"
            class="menu__link"
            >Work</g-link
          >
        </li>
        <li>
          <g-link
            @click.native="restingState"
            to="/journal/"
            tabindex="3"
            class="menu__link"
            >Journal</g-link
          >
        </li>
        <li>
          <g-link
            @click.native="restingState"
            to="/contact/"
            tabindex="4"
            class="menu__link"
            >Hello</g-link
          >
        </li>
      </ul>
    </nav>
  </div>
  <!-- .page-header -->
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import anime from "animejs";
import Logo from "./Logo";

export default {
  data() {
    return {
      isActive: false,
      isExpanded: false
    };
  },
  components: {
    Logo
  },
  mounted() {
    this.animate();
  },
  methods: {
    toggleState() {
      this.isActive = !this.isActive;
      this.isExpanded = !this.isExpanded;
    },
    restingState() {
      this.isActive = false;
      this.isExpanded = false;
    },
    animate() {
      const tl = anime.timeline({
        easing: "cubicBezier(.57,.19,.3,.95)",
        duration: 550
      });

      tl.add({
        targets: "#logo",
        opacity: 1,
        scale: 1
      });

      tl.add(
        {
          targets: "svg g#skateboard path",
          strokeDashoffset: [anime.setDashoffset, 0],
          delay: anime.stagger(250)
        },
        "+=250"
      );
    }
  }
};
</script>
