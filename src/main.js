import Vue from "vue";
import App from "./App.vue";
import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
    const firebaseConfig = {
        apiKey: "AIzaSyDotXCevEWDfjKgemBgAESYD8NAsfCI_CA",
        authDomain: "addcloud-97a45.firebaseapp.com",
        projectId: "addcloud-97a45",
        storageBucket: "addcloud-97a45.appspot.com",
        messagingSenderId: "848060357977",
        appId: "1:848060357977:web:152c78e463dba7d7d98048"
    };
    firebase.initializeApp(firebaseConfig);
}
export const db = firebase.firestore()

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount("#app");