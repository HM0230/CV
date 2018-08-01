import Vue from 'vue'
import Router from 'vue-router'
import cssShow from '../components/cssShow/cssShow.vue'
import commonFun from '../components/commonFun/commonFun.vue'
import list from '../components/list/list.vue'
import shoppingCar from '../components/shoppingCar/shoppingCar.vue'
import mine from '../components/mine/mine.vue'
import login from '../components/login/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
  		path:'/cssShow',
  		component:cssShow
  	},
  	{
   		path:'/commonFun',
  		component:commonFun
  	},
  	{
  		path:'/list',
  		component:list
    },
    {
  		path:'/shoppingCar',
  		component:shoppingCar
    },
    {
  		path:'/mine',
  		component:mine
    },
  	{
  		path:'*',
  		component:login
	},
	{
		path:'/',
		redirect:'/cssShow'
	}
  ]
})
