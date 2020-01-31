<template>
  <div class="page-content">
    <h1 class="brush title">Uses</h1>

    <div class="intro">
      <p>
        After shamelessly taking the idea from
        <a href="https://wesbos.com/uses/" target="_blank">Wes Bos</a>, I've
        created a page that outlines the every day things I use. I always love
        seeing what others use and added this for anyone that might be
        interested.
      </p>
    </div>

    <h2>Hardware</h2>
    <ul class="list">
      <li>2017 MacBook Pro 13&quot; in space gray (no touchbar)</li>
      <li>
        <a
          href="https://www.amazon.com/gp/product/B01C8PIALU/"
          rel="noindex nofollow"
          >STM Prime Backpack</a
        >
        in steel gray
      </li>
      <li>
        <a
          href="https://www.amazon.com/gp/product/B01872MCIA/"
          rel="noindex nofollow"
          >68-key Qisan Magicforce gaming keyboard</a
        >
        w/ MX Blue dampers
      </li>
      <li>
        iPhone Xs Max / Nexus 5
        <em>(still going strong!)</em>
      </li>
    </ul>

    <h2>Software</h2>
    <ul class="list">
      <li>
        <a href="https://code.visualstudio.com/" rel="noindex nofollow"
          >VSCode</a
        >
      </li>
      <li>
        <a href="https://www.sublimetext.com/3" rel="noindex nofollow"
          >Sublime Text</a
        >
      </li>
      <li>
        <a href="https://iterm2.com/" rel="noindex nofollow">iTerm 2</a>
      </li>
      <li>
        <a href="https://www.sketchapp.com/" rel="noindex nofollow">Sketch</a>
      </li>
      <li>
        <a href="https://sequelpro.com/" rel="noindex nofollow">Sequel Pro</a>
      </li>
      <li>
        <a href="https://www.panic.com/transmit/" rel="noindex nofollow"
          >Transmit by Panic</a
        >
      </li>
      <li>
        Deployed on
        <a href="https://zeit.co/now" rel="noindex nofollow">Zeit Now</a>
      </li>
    </ul>
  </div>
</template>

<static-query>
query {
  metadata {
    siteUrl
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    return {
      title: "Uses",
      meta: [
        {
          name: "description",
          content:
            "These are the everyday items I use to build web applications and get work done."
        },
        {
          key: "og:url",
          property: "og:url",
          content: this.$static.metadata.siteUrl + this.$route.path
        },
        {
          key: "og:title",
          property: "og:title",
          content: "The tools of my trade."
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: "The tools of my trade."
        }
      ]
    };
  }
};
</script>
