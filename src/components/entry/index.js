import vueTemplate from './vue.template.js';
import App from '../pages/App.vue'
import router from '../pages/router'
import axios from 'axios';
import store from '../store/index'

vueTemplate.prototype.$getServerUrl = function () {
  if ("production" === process.env.NODE_ENV) {
    axios.get("/jschool-portal/config.json").then(response => {
      vueTemplate.prototype.$baseURL = response.data.SERVER_URL;
      new vueTemplate({
        router,
        store,
        render: h => h(App),
      }).$mount('#app')
    })
  } else {
    vueTemplate.prototype.$uploadUrl ='/api';
    new vueTemplate({
      router,
      store,
      render: h => h(App),
    }).$mount('#app')
  }
}()