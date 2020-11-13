<template>
  <div class="music">
    <div class="music__content" v-if="items && !error">
      <!-- <header>
        <h4 class="music__title">Music</h4>
      </header> -->
      <ul class="music__items">
        <li v-for="(item, idx) of items" :key="idx">
          <a :href="item.url">
            <!-- <div class="music__icon">
              <fa :icon="['fas', 'compact-disc']" class="fa-2x" />
            </div> -->
            <div class="music__cover">
              <g-image
                itemprop="photo"
                :src="item.image[1]['#text']"
                :alt="item.artist.name"
              />
            </div>
            <div>
              <h5 class="music__album-title">
                {{ item.name }}
              </h5>
              <span class="music__separator">by</span>
              <span class="music__artist">
                {{ item.artist.name }}
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
      const api = `https://ws.audioscrobbler.com/2.0/?method=user.getlovedtracks&user=${process.env.GRIDSOME_LASTFM_USERNAME}&api_key=${process.env.GRIDSOME_LASTFM_API_KEY}&format=json&limit=3`;

      axios
        .get(api)
        .then((res) => {
          this.items = res.data.lovedtracks.track;
        })
        .catch((err) => {
          this.error = true;
          console.log(err);
        });
    },
  },
};
</script>
