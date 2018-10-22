import Api from '@/services/api'

export default {
  getSongs() {
    return Api().post('songs')
  }
}
