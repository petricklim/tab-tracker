import Vue from 'vue'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import colors from 'vuetify/es5/util/colors'
import 'vuetify/dist/vuetify.min.css'
import store from './store/store'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  theme: {
    primary: colors.cyan.darken1,
    secondary: colors.cyan.lighten4,
    accent: colors.indigo.base
  }
})

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
