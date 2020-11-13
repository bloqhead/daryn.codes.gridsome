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
    <g-image
      fit="contain"
      width="626"
      quality="90"
      src="~/assets/images/neofetch@2x.png"
      alt="neofetch screenshot from my personal MacBook Pro"
      class="neofetch-image"
    />
    <p>
      <small>
        Made with
        <a href="https://github.com/dylanaraps/neofetch" target="_blank"
          >neofetch</a
        >.
      </small>
    </p>
    <div class="flex-well flex-well--auto">
      <div>
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
          <li>Dell Ultrasharp U2718Q 27-Inch 4K IPS Monitor</li>
          <li>iPhone Xs Max</li>
          <li>Audio-Technica ATR2100X-USB USB/XLR Microphone</li>
          <li>Knox Gear Boom Arm and Shock Mount</li>
          <li>Audio-Technica ATH-M30x headphones</li>
        </ul>
      </div>
      <div>
        <h2>Software</h2>
        <ul class="list">
          <li>
            <a href="https://nova.app/" rel="noindex nofollow">Nova by Panic</a>
          </li>
          <li>
            <a href="https://code.visualstudio.com/" rel="noindex nofollow"
              >VSCode</a
            >
          </li>
          <li>
            <a href="https://iterm2.com/" rel="noindex nofollow">iTerm 2</a>
          </li>
          <li>
            <a href="https://sketchapp.com/" rel="noindex nofollow">Sketch</a>
          </li>
          <li>
            <a href="https://figma.com/" rel="noindex nofollow">Figma</a>
          </li>
          <li>
            <a href="https://vercel.com/" rel="noindex nofollow">Vercel</a>
          </li>
        </ul>
      </div>
    </div>
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
            "These are the everyday items I use to build web applications and get work done.",
        },
        {
          key: "og:url",
          property: "og:url",
          content: this.$static.metadata.siteUrl + this.$route.path,
        },
        {
          key: "og:title",
          property: "og:title",
          content: "The tools of my trade.",
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: "The tools of my trade.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.neofetch-image {
  max-width: 626px;
}
</style>
