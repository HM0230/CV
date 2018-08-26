import Vue from 'vue'
import Router from 'vue-router'
import mainPart from '../components/mainPart/mainPart.vue'

import cssShow from '../components/mainPart/cssShow/cssShow.vue'
import commonFun from '../components/mainPart/commonFun/commonFun.vue'
import list from '../components/mainPart/list/list.vue'
import shoppingCar from '../components/mainPart/shoppingCar/shoppingCar.vue'
import mine from '../components/mainPart/mine/mine.vue'

import mapPage from '../components/mainPart/commonFun/mapPage/mapPage.vue'
import barcode from '../components/mainPart/commonFun/barcode/barcode.vue'
import payment from '../components/mainPart/commonFun/payment/payment.vue'
import oauthLogin from '../components/mainPart/commonFun/oauthLogin/oauthLogin.vue'
import share from '../components/mainPart/commonFun/share/share.vue'
import imNav from '../components/mainPart/commonFun/im/imNav.vue'
import layimCom from '../components/mainPart/commonFun/im/layim.vue'
Vue.use(Router)

export default new Router({
  	routes: [
		{
			path:'/',
			component:mainPart,
			children:[
				{
					path:'/',
					component:cssShow
				},
				{
					path:'/commonFun',
					name:'commonFun',
					component:commonFun,
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
			]
		},
		{
			path:'/mapPage',
			name:'mapPage',
			component:mapPage
		},
		{
			path:'/barcode',
			name:'barcode',
			component:barcode
		},
		{
			path:'/payment',
			name:"payment",
			component:payment
		},
		{
			path:'/oauthLogin',
			name:'oauthLogin',
			component:oauthLogin
		},
		{
			path:'/share',
			name:'share',
			component:share
		},
		{
			path:'/imNav',
			name:'imNav',
			component:imNav
		},
		{
			path:'/layimCom',
			name:'layimCom',
			component:layimCom
		},
		{
			path:'*',
			component:mainPart
		},
		{
			path:'/',
			redirect:'/mainPart'
		}
  	]
})
