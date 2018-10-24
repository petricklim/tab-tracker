import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '../components/Songs'
import CreateSong from '../components/CreateSong'
import EditSong from '../components/EditSong'
import SongDetails from '../components/SongDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/songs/add',
      name: 'addSong',
      component: CreateSong
    },
    {
      path: '/songs/:songId',
      name: 'song',
      component: SongDetails
    },
    {
      path: '/songs/edit/:songId',
      name: 'editSong',
      component: EditSong
    }
  ]
})
