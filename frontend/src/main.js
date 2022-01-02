import Vue from 'vue'
import App from './App.vue'
import '../theme/index.css'
import ElementUI from 'element-ui'
import router from "@/router";
import 'normalize.css'
Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
