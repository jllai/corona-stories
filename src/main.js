// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { firestorePlugin } from 'vuefire'

Vue.use(Vuetify)

// Initialize Firebase
Vue.use(firestorePlugin)
firebase.initializeApp({
  projectId: 'corona-stories-274420',
  databaseURL: 'https://corona-stories-274420.firebaseio.com'
})
export const db = firebase.firestore()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
