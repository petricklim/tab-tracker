<template>
  <v-layout >
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            label="Email"
            v-model="email">
          </v-text-field>
          <v-text-field
            label="Password"
            v-model="password">
          </v-text-field>
          <div v-html="error"/>
          <br/>
          <v-btn class="cyan" dark @click="login">Login</v-btn>
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
    async login() {
      try {
        await authService.login({
          email: this.email,
          password: this.password,
          error: ''
        })
      } catch (error) {
        // this.error = error.response.data.error
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
