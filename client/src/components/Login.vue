<template>
  <v-layout >
    <v-flex xs6 offset-xs3>
      <panel title="Login">
        <form
          name="tab-tracker-form"
          autocomplete="off">
          <v-text-field
            label="Email"
            v-model="email">
          </v-text-field>
          <v-text-field
            type="password"
            label="Password"
            v-model="password">
          </v-text-field>
        </form>
        <br/>
        <div v-html="error"/>
        <br/>
        <v-btn class="cyan" dark @click="login">Login</v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import authService from '@/services/authService'
import Panel from '@/components/Panel'

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
        const response = await authService.login({
          email: this.email,
          password: this.password
        })

        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
  .error {
    color:red;
  }
</style>
