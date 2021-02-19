<template>
  <div class="page-content">
    <h1 class="brush title">Hello</h1>

    <div class="intro">
      <p>
        If you want to drop me a line to ask a question or just say hi, you can
        email me at
        <a href="mailto:daryn@hey.com">daryn@hey.com</a>. I'll try to respond in
        a day or two.
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
      title: "Hello",
      meta: [
        {
          name: "description",
          content: "This is my contact info. Drop me a line.",
        },
        {
          key: "og:url",
          property: "og:url",
          content: this.$static.metadata.siteUrl + this.$route.path,
        },
        {
          key: "og:title",
          property: "og:title",
          content: "Say Hello",
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: "Say Hello",
        },
      ],
    };
  },
};
</script>
