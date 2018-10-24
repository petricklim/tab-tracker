<template>
  <v-layout fluid>
    <v-flex xs6 offset-xs3>
      <div class="hello">
        <h1>{{ msg }}</h1>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Song Tracker App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
