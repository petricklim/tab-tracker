import Api from '@/services/api'

export default {
  login(credentials) {
    return Api().post('login', credentials)
  },
  register(credentials) {
    return Api().post('register', credentials)
  }
}
