// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import router from './router'
import museVue from "muse-ui";
import 'muse-ui/dist/muse-ui.css';
import vueResource from  "vue-resource";
import veeValidator from "vee-validate";
import VueScroller from 'vue-scroller'



import plugins from "yt-vue-plugins";
import store from "./store/index";

Vue.config.productionTip = false;
//使用material组件
Vue.use(veeValidator);//表单验证
Vue.use(museVue);
Vue.use(vueResource);
Vue.use(Router);//使用路由
Vue.use(plugins);
Vue.use(VueScroller);//使用上拉加载更多，下拉刷新

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
