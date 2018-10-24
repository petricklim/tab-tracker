<template>
  <v-layout >
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <v-btn
          slot="action"
          fab dark absolute right bottom
          class="black accent-2"
          @click="navigateTo({ name: 'addSong' })"
          >
          <v-icon>add</v-icon>
        </v-btn>
        <div
          class="song"
          v-for="song in songs"
          :key="song.id">
          <v-layout>
            <v-flex xs6>
              <div class="song-title mb-2">
                {{ song.title }}
              </div>
              <div class="song-artist">
                {{ song.artist }}
              </div>
              <div class="song-genre mb-4">
                {{ song.genre }}
              </div>

              <v-btn
                dark
                class="blue"
                @click="navigateTo({ name: 'song', params: { songId: song.id } })">
                View
              </v-btn>
            </v-flex>

            <v-flex xs6>
              <img class="album-image" :src="song.albumImage" />
            </v-flex>
          </v-layout>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '../components/Panel'
import songsService from '../services/songsService'

export default {
  components: {
    Panel
  },
  data() {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  },
  async mounted() {
    const response = await songsService.getSongs()
    this.songs = response.data
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height:330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
}

.album-image {
  width: 242px;
  height: 242px;
}
</style>
