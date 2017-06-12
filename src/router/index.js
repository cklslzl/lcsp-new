import Router from 'vue-router';
import Index from '../components/index/index.vue'
import Page2 from '../components/page2/index.vue'
import Page1 from "../components/page1/index.vue";


export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/page2',
      name: 'page2',
      component: Page2
    },
    {
      path: '/page1',
      name: 'page1',
      component: Page1
    }
  ]
})
