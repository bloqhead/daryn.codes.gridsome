<template>
  <div class="music">
    <div class="music__content" v-if="items && !error">
      <!-- <header>
        <h4 class="music__title">Music</h4>
      </header> -->
      <ul class="music__items">
        <li v-for="(item, idx) of items" :key="idx">
          <a :href="item.url">
            <div class="music__icon">
              <fa :icon="['fas', 'compact-disc']" class="fa-2x" />
            </div>
            <div>
              <h5 class="music__album-title">
                {{ item.name }}
              </h5>
              <span class="music__separator">by</span>
              <span class="music__artist">
                {{ item.artist["#text"] }}
              </span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Music",
  data() {
    return {
      items: null,
      error: false,
    };
  },
  mounted() {
    this.fetchLatestScrobbles();
  },
  methods: {
    fetchLatestScrobbles() {
      const api = `https://ws.audioscrobbler.com/2.0/?user=${process.env.GRIDSOME_SPOTIFY_USERNAME}&api_key=${process.env.GRIDSOME_SPOTIFY_API_KEY}&format=json&method=user.getweeklyalbumchart&limit=3`;

      axios
        .get(api)
        .then((res) => {
          this.items = res.data.weeklyalbumchart.album;
        })
        .catch((err) => {
          this.error = true;
          console.log(err);
        });
    },
  },
};
</script>
