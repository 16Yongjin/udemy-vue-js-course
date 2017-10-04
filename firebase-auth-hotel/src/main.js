import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import firebaseui from 'firebaseui'
import router from './router'
import { config } from './helpers/firebaseConfig'

Vue.use(VueRouter);

new Vue({
  data: {
    logged: false
  },
  router,
  created() {
    firebase.initializeApp(config);
    var unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!this.logged && user) {
        this.logged = true
        this.$router.push('/success')
      } else {
        this.$router.push('/auth')
        this.logged = false
      }
    });
  },
  el: '#app',
  render: h => h(App)
});
