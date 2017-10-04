import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', function(value) {
  return typeof value === 'string' ? value.toLowerCase() : value
})

Vue.mixin({
  created() {
    console.log("Global minxin created!");
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
