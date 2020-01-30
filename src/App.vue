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

<script>
import GlobalHeader from "./components/Header.vue";
import GlobalFooter from "./components/Footer";

export default {
  components: {
    GlobalHeader,
    GlobalFooter
  }
};
</script>
