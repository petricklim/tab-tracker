<template>
  <v-layout >
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <div
          v-for="song in songs"
          :key="song.title">
          {{ song.title }}
          {{ song.artist }}
          {{ song.album }}
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
      songs: []
    }
  },
  async mounted() {
    this.songs = await songsService.getSongs()
  }
}
</script>

<style scoped>
</style>
