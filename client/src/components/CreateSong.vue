<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata" class="panel-song">
        <v-text-field
          label="Title"
          required
          :rules="[required]"
          v-model="song.title">
        </v-text-field>

        <v-text-field
          label="Artist"
          v-model="song.artist">
        </v-text-field>

        <v-text-field
          label="Genre"
          v-model="song.genre">
        </v-text-field>

        <v-text-field
          label="Album"
          v-model="song.album">
        </v-text-field>

        <v-text-field
          label="Album Image Url"
          v-model="song.albumImage">
        </v-text-field>

        <v-text-field
          label="Youtube ID"
          v-model="song.youtubeId">
        </v-text-field>
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Structure" class="ml-4 panel-song">
        <v-text-field
          label="Tab"
          multi-line
          v-model="song.tab">
        </v-text-field>

        <v-text-field
          multi-line
          label="Lyrics"
          v-model="song.lyrics">
        </v-text-field>
      </panel>

      <div
        class="danger-alert"
        v-if="error">
        {{ error }}
      </div>

      <v-btn
        dark
        class="cyan"
        @click="add">
        Add Song
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '../components/Panel'
import songsService from '../services/songsService'

export default {
  data() {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImage: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      required: value => !!value || 'Required.',
      error: null
    }
  },
  components: {
    Panel
  },
  methods: {
    async add() {
      this.error = null
      const isFieldsFilled = Object
        .keys(this.song)
        .every(key => !!this.song[key])

      if (!isFieldsFilled) {
        this.error = 'Please fill all the fields.'
        return
      }

      try {
        await songsService.addSong(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        // console.log(err)
      }
    }
  }
}
</script>

<style scoped>
.danger-alert{
  margin-top: 10px;
  color: red;
}
.panel-song{
  height:520px;
}
</style>
