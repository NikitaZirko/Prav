import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VueFire from 'vuefire'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import firebase from 'firebase'
import 'firebase/firestore'

Vue.use(Vuetify)
Vue.use(VueFire)

firebase.initializeApp({
  apiKey: 'AIzaSyCfvHZgJslWj_fZ7XobO_mmZRa9-Sc2Ico',
  authDomain: 'prav-bot-231604.firebaseapp.com',
  databaseURL: 'https://prav-bot-231604.firebaseio.com',
  projectId: 'prav-bot-231604',
  storageBucket: 'prav-bot-231604.appspot.com',
  messagingSenderId: '816877065816'
})

export const db = firebase.firestore()
Vue.config.productionTip = false

/* eslint-disable no-new */
const unsubscribe = firebase.auth()
  .onAuthStateChanged((firebaseUser) => {
    new Vue({
      el: '#app',
      router,
      store,
      render: h => h(App),
      created () {
        if (firebaseUser) {
          store.dispatch('autoSignIn', firebaseUser)
        }
      }
    })
    unsubscribe()
  })
