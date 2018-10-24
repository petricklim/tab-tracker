import Api from '@/services/api'

export default {
  getSongs() {
    return Api().get('songs')
  },
  getSong(songId) {
    return Api().get(`songs/${songId}`)
  },
  addSong(song) {
    return Api().post('songs', song)
  },
  update(songId, song) {
    return Api().put(`songs/edit/${songId}`, song)
  }
}
