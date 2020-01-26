<template>
  <div class="page-wrapper" data-floating-label="Daryn St. Pierre // Front End Web Dev">
    <header />

    <div class="content" role="main">
      <slot />
    </div>
    <!-- .content -->

    <footer />
  </div>
  <!-- .page-wrapper -->
</template>

<script>
import Footer from "~/components/Footer.vue";
import Header from "~/components/Header.vue";

export default {
  components: {
    Footer,
    Header
  }
};
</script>
