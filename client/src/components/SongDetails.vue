<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <panel title="Song Details" class="song-panel">
          <v-layout>
            <v-flex xs6>
              <div class="song-title">
                {{ song.title }}
              </div>
              <div class="song-artist">
                {{ song.artist }}
              </div>
              <div class="song-genre">
                {{ song.genre }}
              </div>
              <v-btn
                dark
                class="blue"
                @click="navigateTo({ name: 'editSong', params: { songId: song.id } })">
                Edit
              </v-btn>
            </v-flex>

            <v-flex xs6>
              <img class="album-image" :src="song.albumImage" />
              <br/>
              {{ song.album }}
            </v-flex>
          </v-layout>
        </panel>
      </v-flex>

      <v-flex xs6>
        <panel title="Youtube Video" class="ml-3 song-panel">
          <youtube
            :video-id="song.youtubeId"
            :player-height="'330px'"
             />
        </panel>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs6>
        <panel title="tabs" class="mt-3 song-panel">
          <textarea
            readonly
            v-model="song.tab" />
        </panel>
      </v-flex>
      <v-flex xs6>
        <panel title="Lyrics" class="mt-3 ml-3 song-panel">
          <textarea
            readonly
            v-model="song.lyrics" />
        </panel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import songsService from '../services/songsService'
import Panel from '../components/Panel'

export default {
  data() {
    return {
      song: {}
    }
  },
  async mounted() {
    const songId = this.$store.state.route.params.songId
    const response = await songsService.getSong(songId)
    this.song = response.data
  },
  components: {
    Panel
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.song-panel {
  height:400px;
  overflow: hidden;
}
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

textarea {
  width:100%;
  font-family: monospace;
  border: none;
  height:330px;
  border-style:none;
  overflow:auto;
  padding:40px;
}
</style>
