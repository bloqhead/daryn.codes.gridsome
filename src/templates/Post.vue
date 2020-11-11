<template>
  <div class="page-content">
    <div class="breadcrumb">
      <p>
        <g-link to="/journal/" class="breadcrumb__link">&larr; Back</g-link>
      </p>
    </div>

    <article class="journal-entry">
      <header class="journal-entry__header">
        <div class="journal-entry__title">
          <h1>{{ $page.post.title }}</h1>
        </div>
        <div class="journal-entry__postdate">
          <format-date :date="$page.post.date" />
        </div>
      </header>

      <p class="journal-entry__reading-time">
        {{ $page.post.timeToRead }} minute read
      </p>

      <div class="journal-entry__body" v-html="$page.post.content" />
    </article>
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
query Post ($path: String!) {
    post: post (path: $path) {
      slug
      id
      title
      excerpt
      content
      date
      timeToRead
    }
}
</page-query>

<script>
import FormatDate from "@/components/FormatDate";

export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: "description",
          content: this.$page.post.excerpt || this.metaDesc
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
          key: "og:type",
          property: "og:type",
          content: "article"
        },
        {
          key: "og:title",
          property: "og:title",
          content: this.$page.post.title
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: this.$page.post.title
        },
        {
          key: "og:description",
          property: "og:description",
          content: this.$page.post.excerpt || this.metaDesc
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.post.excerpt || this.metaDesc
        }
      ]
    };
  },
  computed: {
    metaDesc() {
      const content = this.$page.post.content;
      return (content.length > 5
        ? `${content.substring(0, 160)}...`
        : content
      ).replace(/(<([^>]+)>)/gi, "");
    }
  },
  components: {
    FormatDate
  }
};
</script>

<style></style>
