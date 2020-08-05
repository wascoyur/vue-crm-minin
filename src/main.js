import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min.js'
import dateFilter from './filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

// Your web app's Firebase configuration

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyCsviA6ulUJjfcV4Id7WGECSy04gaxQQ4s",
  authDomain: "vue-crm-23111.firebaseapp.com",
  databaseURL: "https://vue-crm-23111.firebaseio.com",
  projectId: "vue-crm-23111",
  storageBucket: "vue-crm-23111.appspot.com",
  messagingSenderId: "915357925508",
  appId: "1:915357925508:web:8b42d2058edeffc82e02d1"
});
let app
firebase.auth().onAuthStateChanged(()=>{
  if(!app) {
    app=new Vue({
    router,
    store,
    render: h => h(App)
    }).$mount('#app')
  }
}


)
