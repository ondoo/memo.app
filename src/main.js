import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase"

Vue.config.productionTip = false


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtcib8fO9sRoX90v_PqV0HBUAxJZAsWMk",
  authDomain: "ondoo-test.firebaseapp.com",
  projectId: "ondoo-test",
  storageBucket: "ondoo-test.appspot.com",
  messagingSenderId: "981079795997",
  appId: "1:981079795997:web:b9af713102accd2a8619f4"
};

firebase.initializeApp(firebaseConfig);

const myEmail = "leh@gmail.com";
const myPwd = "lee1234";

firebase
.auth()
.signInWithEmailAndPassword(myEmail,myPwd)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
