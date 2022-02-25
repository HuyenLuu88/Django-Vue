import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import { CHECK_AUTH } from "./store/actions.type";
import ApiService from "./common/api.service";
import DateFilter from "./common/date.filter";
import ErrorFilter from "./common/error.filter";
import DataTable from '@andresouzaabreu/vue-data-table';
import '@andresouzaabreu/vue-data-table/dist/DataTable.css';
import CuteModal from 'vue-cute-modal';
import { BootstrapVue } from 'bootstrap-vue'

Vue.config.productionTip = false;
Vue.filter("date", DateFilter);
Vue.filter("error", ErrorFilter);
Vue.component("data-table", DataTable);
Vue.use(CuteModal)
Vue.use(BootstrapVue)

ApiService.init();

// Ensure we checked auth before each page load.
router.beforeEach((to, from, next) =>
  Promise.all([store.dispatch(CHECK_AUTH)]).then(next)
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
