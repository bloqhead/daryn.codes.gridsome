<template>
  <div class="page-content">
    <h1 class="brush title">Journal.</h1>

    <div class="intro">
      <p>A collection of thoughts and findings.</p>
    </div>

    <div class="journal-list">
      <PostList
        class="journal-list__item"
        v-for="edge in $page.allPost.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
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

<page-query>
query {
  allPost {
    totalCount
    edges {
      node {
        id
        title
        timeToRead
        date (format: "D MMMM YYYY")
        path
      }
    }
  }
}
</page-query>

<script>
import FormatDate from "@/components/FormatDate";
import PostList from "@/components/PostList";

export default {
  metaInfo() {
    return {
      title: "Journal",
      meta: [
        {
          name: "description",
          content:
            "Topics that span the gamut of web development, UX, Vue.js, and other similar topics."
        },
        {
          name: "author",
          content: "Daryn St. Pierre"
        },
        {
          key: "og:url",
          property: "og:url",
          content: this.$static.metadata.siteUrl + this.$route.path
        },
        {
          key: "og:title",
          property: "og:title",
          content: "Journal"
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: "Journal"
        }
      ]
    };
  },
  components: {
    FormatDate,
    PostList
  }
};
</script>
