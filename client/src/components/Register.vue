<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <input v-model="email" type="email" name="email" placeholder="email" /><br/>
          <input v-model="password" type="password" name="password" placeholder="password" /><br/>
          <div v-html="error"/>
          <br/>
          <button @click="register">Register</button>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import authService from '@/services/authService'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register() {
      try {
        await authService.register({
          email: this.email,
          password: this.password,
          error: ''
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
  .error {
    color:red;
  }
</style>
