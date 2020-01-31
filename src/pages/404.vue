<template>
  <div class="page-content">
    <h1 class="brush title">Oops!</h1>

    <div class="intro">
      <p>
        It looks like you've hit a wall! The page you were looking for has
        either moved or been deleted. Sorry about your luck!
        <g-link to="/">Go home.</g-link>
      </p>
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
      title: "Page Not Found!",
      meta: [
        {
          name: "description",
          content: "The page you were looking for could not be found."
        },
        {
          key: "og:url",
          property: "og:url",
          content: this.$static.metadata.siteUrl + this.$route.path
        },
        {
          key: "og:title",
          property: "og:title",
          content: "Page Not Found!"
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: "Page Not Found!"
        }
      ]
    };
  }
};
</script>
