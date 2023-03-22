import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueConfirmDialog from 'vue-confirm-dialog'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(VueConfirmDialog);
Vue.component('vue-confirm-dialog', VueConfirmDialog.default)
Vue.prototype._baseUrl = "http://192.168.220.5:8085/springmbti/";
axios.defaults.withCredentials = true;
new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')

window.Kakao.init("14ff9a0b93923e6ee771ed79828eb683");