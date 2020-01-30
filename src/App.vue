<template>
  <div
    class="page-wrapper"
    data-floating-label="Daryn St. Pierre // Front End Web Dev"
  >
    <global-header />

    <div class="content" role="main">
      <transition name="slide-left" mode="out-in">
        <router-view />
      </transition>
    </div>
    <!-- .content -->

    <global-footer />
  </div>
  <!-- .page-wrapper -->
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
import GlobalHeader from "./components/Header.vue";
import GlobalFooter from "./components/Footer";

export default {
  components: {
    GlobalHeader,
    GlobalFooter
  },
  metaInfo() {
    return {
      ...this.$ogp({
        title: this.$static.metadata.siteName,
        description: this.$static.metadata.siteDescription,
        image: `${this.$static.metadata.siteUrl}/og@2x.png`,
        appId: process.env.GRIDSOME_FB_ID
      })
    };
  }
};
</script>
