<template>
  <div class="page-wrapper" :data-floating-label="randTitle">
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
  data () {
    return {
      randTitle: '',
      titles: [
        'Front End Web Developer',
        'JAMStack\'r',
        'Front End Engineer',
        'Pizza evangelist',
        'CodePen 10x\'er',
        'Cat Hoarder',
        '80s and 90s era byproduct',
        'Code jockey',
        'Text editor connoisseur',
        'Occasional artist and illustrator',
        'Owner of way too many video games',
        'JavaScript abuser',
        'Fan of eating and drinking',
        'Animator of web things',
        'Good speller',
        'Vue.js junkie',
        'WordPress tamer',
        'Dark Souls masochist',
        'Self-proclaimed Cyberpunk',
        'Bash hax0r',
        'Black Lives Matter',
      ]
    }
  },
  components: {
    GlobalHeader,
    GlobalFooter
  },
  mounted () {
    this.randFact()
  },
  watch: {
    $route (to, from) {
      this.randFact()
    }
  },
  methods: {
    randFact () {
      const items = this.titles
      const rand = items[Math.floor(Math.random() * items.length)]

      this.randTitle = `Daryn St. Pierre // ${rand}`
    }
  }
};
</script>
