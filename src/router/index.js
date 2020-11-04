// import Vue from 'vue'
// import Router from 'vue-router'
// import Discover from "../discover-page/Discover";
// import NavBar from "../layout/NavBar";
// import Myself from "../myself-page/Myself";
//
// Vue.use(Router)
//
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Discover,
//       redirect: "/discover",
//       children:[
//         {
//           path: "/",
//           name: "发现音乐",
//           component: () => import("../discover-page/child/index/Index"),
//           meta: {
//             showBackBar: false
//           }
//         },
//         {
//           path: "/myself",
//           name: "我的",
//           component: () => import("../myself-page/Myself"),
//           meta: {
//             title: '更多新闻',
//             affix: false
//           }
//         }
//       ]
//     },
//
//     /*{
//       path: "/myself",
//       component: Myself,
//       children: [
//         {
//           path: "/myself",
//           name: "我的",
//           component: () => import("../myself-page/Myself"),
//           meta: {
//             showBackBar: false
//           }
//         }
//       ]
//     },*/
//     /*{
//       path: "/search",
//       name: "",
//       component: () => import("../pages/search-page/SearchHot")
//     },*/
//   ]
// })
// /*Vue.use(Router)
// const router = new Router({
//   router
// })
//
// const VueRouterPush = Router.prototype.push
// Router.prototype.push = function push (to) {
//   return VueRouterPush.call(this, to).catch(err => err)
// }*/
// /*router.beforeEach((to, from, next) => {
//   // 此处判断条件我有看到其他人用to.matched.length ===0进行判断， 具体的还有待进一步验证，大体的思路就是这样的
//   if (to.fullPath === '/') {
//     from.name ? next({ name:from.name }) : next('/home');
//   } else {
//     next(); //如果匹配到正确跳转
//   }
// });*/
import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Helloworld'
import LanQiao from '@/components/page1'
import ACMICPC from '@/components/page2'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [

    {
      path: '/',
      name: '发现音乐',
      component: Home,
    },
    {
      path: '/components/page1',
      name: 'ACMICPC',
      component: ACMICPC,
    },
    {
      path: '/components/page2',
      name: 'LanQiao',
      component: LanQiao,
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
   /* {
      path: '/components/content/Grade',
      name: 'Grade',
      component: Grade,
    },

    {
      path: '/components/content/XinXi',
      name: 'XinXi',
      component: XinXi,
    },

    {
      path:'/components/content/XinXiDetail',
      name:'XinXiDetail',
      component:XinXiDetail,
    },
    {
      path: '/components/content/DaShi',
      name: 'DaShi',
      component: DaShi,
    },

    {
      path:'/components/content/DaShiDetail',
      name:'DaShiDetail',
      component:DaShiDetail,
    },
    {
      path:'/components/system/System',
      name:'System',
      component:System,
    },*/


  ]
})
