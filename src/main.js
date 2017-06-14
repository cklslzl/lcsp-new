// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import router from './router'
import museVue from "muse-ui";
import 'muse-ui/dist/muse-ui.css';
import vueResource from  "vue-resource";
import VueScroller from 'vue-scroller'



import plugins from "yt-vue-plugins";
import store from "./store/index";

Vue.config.productionTip = false;
//使用material组件
Vue.use(museVue);
Vue.use(vueResource);
Vue.use(Router);//使用路由
Vue.use(plugins);
Vue.use(VueScroller);//使用上拉加载更多，下拉刷新

// 注册一个全局自定义指令 v-vertical-line-height
Vue.directive('verticalLineHeight', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) {
    // 设置流程审批的垂直线的高度
    var verticalLineHeight=el.offsetHeight;
    var ElmVerticalLine=el.querySelector(".vertical-line");
    ElmVerticalLine.style.height=verticalLineHeight - 25 + "px";
  }
});


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
