<template>
  <div
    class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12 justify-center text-center mt--sm mb--sm"
  >
    <div v-for="(logo, index) in logos" :key="index">
      <fa
        :icon="[logo.lib ? logo.lib : 'fab', logo.slug]"
        :class="[ `color--${logo.color ? logo.color : logo.slug}`, logo.size ? logo.size : 'fa-7x' ]"
        :title="logo.title"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logos: [
        {
          slug: "html5",
          title: "HTML5"
        },
        {
          slug: "wordpress-simple",
          title: "WordPress",
          color: "wordpress"
        },
        {
          slug: "sass",
          title: "Sass"
        },
        {
          slug: "js",
          title: "JavaScript"
        },
        {
          slug: "php",
          title: "PHP"
        },
        {
          slug: "vuejs",
          title: "Vue.js",
          color: "vue"
        },
        {
          slug: "node",
          title: "Node.js"
        }
      ]
    };
  }
};
</script>