<template>
  <div class="page-content">
    <h1 class="brush title">Work</h1>

    <div class="intro">
      <p>Below, you'll find some select projects I've worked on.</p>
    </div>

    <ul class="project-list">
      <li
        itemscope
        itemtype="http://schema.org/CreativeWork"
        v-for="edge in $page.allWork.edges"
        :key="edge.node.id"
        class="project-list__item"
      >
        <a
          itemprop="url"
          rel="noindex nofollow"
          :href="edge.node.url"
          class="project-list__link"
        >
          <g-image
            :src="edge.node.image"
            :alt="`A screenshot of the ${edge.node.title} project`"
            class="project-list__item-image"
          />
          <!-- .project-list__item-image -->
          <div class="project-list__item-content">
            <h3
              itemprop="headline"
              class="project-list__item-title angle-forward"
            >
              <div class="angle-reverse" v-html="edge.node.title" />
            </h3>
            <div class="project-list__item-faux-link angle-reverse">
              <div class="angle-forward">
                View Site
                <fa :icon="['fa', 'arrow-right']" />
              </div>
            </div>
          </div>
          <!-- .project-list__item-content -->
        </a>
        <div class="project-list__item-tasks">
          <h4 itemprop="subheadline">Project Summary</h4>
          <p v-html="edge.node.content" />
        </div>
        <!-- .project-list__item-summary -->
      </li>
      <!-- .project-list__item -->
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

<page-query>
query {
  allWork {
    totalCount
    edges {
      node {
        id
        title
        url
        image
        content
        slug
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: "Work",
      meta: [
        {
          name: "description",
          content:
            "A selection of Vue.js, WordPress, and UI/UX projects from my portfolio."
        },
        {
          key: "og:url",
          property: "og:url",
          content: this.$static.metadata.siteUrl + this.$route.path
        },
        {
          key: "og:title",
          property: "og:title",
          content: "Samples of my work."
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: "Samples of my work."
        }
      ]
    };
  }
};
</script>
