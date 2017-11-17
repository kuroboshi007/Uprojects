import Vue from 'vue'
import Router from 'vue-router'

//引入界面
import Login from '@/views/login.vue'
import Main from '@/views/main.vue'

Vue.use(Router)

//配置路由
export defult new Router({
	router:[
	{path:'/',name:'Login',component:Login},
	{path:'/main',name:'Main',component:Main},
	]
})
 