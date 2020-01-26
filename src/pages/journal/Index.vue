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
  name: "Journal",
  metaInfo: {
    title: "Journal",
    meta: [
      {
        name: "author",
        content: "Daryn St. Pierre"
      }
    ]
  },
  components: {
    FormatDate,
    PostList
  }
};
</script>
