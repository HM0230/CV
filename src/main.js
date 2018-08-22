// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import axios from './utils/service';
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import {getToken} from './utils/auth'
Vue.prototype.$http = axios;
Vue.config.productionTip = false
Vue.use(Mint);
/* eslint-disable no-new */
// const whiteList = ['/login', '/','/allClass','/hotGoods','/shoppingCar','/userCenter']; //白名单路由
// 路由钩子函数 
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    if(getToken()){
      next('/userCenter');
    }else{
      next();
    }
  }else{
    // if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next();
    // } else {
    //   next('/login'); // 否则全部重定向到登录页
    // }
  }
});
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
