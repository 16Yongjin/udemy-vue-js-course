<template>
  <div id="app">
    <h1>Hello world!</h1>
    {{ msg }}
  <app-server></app-server>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Servers from './components/Server/Servers.vue'
import ServerDetails from './components/Server/ServerDetails.vue'


export default {
  components: {
    'app-header': Header,
    'app-server': Servers,
    'app-server-details': ServerDetails,
    'app-footer': Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
