<template>
  <div class="page-content">
    <h1 class="brush title">Versatile</h1>

    <div
      itemscope
      itemtype="https://schema.org/Person"
      class="intro intro--has-image"
    >
      <div class="intro__image">
        <g-image
          itemprop="photo"
          src="~/assets/images/me-new.jpg"
          alt="A picture of Daryn with long hair"
        />
      </div>
      <p>
        My name is
        <span itemprop="givenName">Daryn</span>
        and I build
        <g-link to="/work/">websites</g-link>&nbsp;in sunny St. Petersburg
        Florida. I like to experiment on
        <a href="https://codepen.io/bloqhead">Codepen</a>
        and have been featured on the front page multiple times, as well as in
        <a href="https://codepen.io/spark/">Codepen Spark</a>
        .
      </p>
    </div>

    <div class="intro">
      <p>
        Design, code,
        <abbr title="User Experience">UX</abbr>
        /
        <abbr title="User Interface">UI</abbr>
        , accessibility, client relations; I do it all. I've been in the game
        since circa 2001 and refuse to stop learning.
      </p>
    </div>

    <div class="doomguy">
      <g-image
        itemprop="photo"
        src="~/assets/images/doomguy-walking.gif"
        alt="An animated gif of Doomguy walking"
      />
    </div>

    <h3>It all started as a kid&hellip;</h3>

    <p class="attn">
      I was heavily influenced by 80s and 90s culture, as well as my
      computer-savvy father. Before I was born, he was a contractor for NASA and
      worked on computer systems that were used in space capsules. With his
      guidance, I was eventually navigating
      <abbr title="Microsoft Disk Operating System">MS-DOS</abbr>
      like a pro.
    </p>

    <div class="doomguy">
      <g-image
        itemprop="photo"
        src="~/assets/images/doomguy.gif"
        alt="An animated gif of Doomguy's various facial expressions"
      />
    </div>

    <!-- <p>This upbringing, coupled with my artistic roots (and a couple failed art school attempts), eventually evolved into a graphic design career that gifted me with many interesting experiences and problems to solve.</p>

    <p>Along the way I also picked up some coding experience and directed my focus to front end development with some back end experience sprinkled in for good measure. I'm full-stack in every sense and even have some sysadmin skills to boot (I used to manage an Apache webserver with ~70 websites). Don't let the baby face deceive you; I've been in the scene for a while.</p>-->

    <h3>I build things with&hellip;</h3>

    <brand-logos />

    <ul class="list list--cols">
      <li>WordPress</li>
      <li>
        <a href="https://sass-lang.com/">SCSS</a>
      </li>
      <li>JavaScript / ES(X)</li>
      <li>HTML5</li>
      <li>PHP / Twig</li>
      <li>
        <a href="https://vuejs.org/">VueJS</a>
      </li>
      <li>
        <a href="https://gridsome.org/">Gridsome</a>
      </li>
      <li>
        <a href="https://animejs.com/">AnimeJS</a>
      </li>
      <li>
        <a href="https://greensock.com/">Greensock</a>
      </li>
    </ul>
  </div>
</template>

<static-query>
query {
  metadata {
    siteUrl
    siteName
    siteDescription
  }
}
</static-query>

<script>
import BrandLogos from "~/components/BrandLogos";

export default {
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          name: "description",
          content: this.$static.metadata.siteDescription,
        },
        {
          key: "og:url",
          property: "og:url",
          content: this.$static.metadata.siteUrl + this.$route.path,
        },
        {
          key: "og:title",
          property: "og:title",
          content: this.$static.metadata.siteName,
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: this.$static.metadata.siteName,
        },
        {},
      ],
    };
  },
  components: {
    BrandLogos,
  },
};
</script>

<style lang="scss" scoped>
.doomguy {
  --bg: #1c1c1c;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 1em auto;
  text-align: center;

  &:before,
  &:after {
    content: "";
    height: 5px;
    flex: 1 0 0;
    background-color: var(--bg);
    border-radius: 5px;
  }

  img {
    display: block;
    width: 80px;
    height: auto;
    background-color: var(--bg);
    border-radius: 10px;
  }
}
</style>
