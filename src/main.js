import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import i18n from './i18n'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles/index.scss'
import icons from 'glyphicons'
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false
Vue.use(Element, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})
Vue.use(icons)

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBlzFb_sy2ujgiORrNFUuy-SMskJsVyeiE",
    libraries: "places"
  }
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
