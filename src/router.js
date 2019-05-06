import VueRouter from 'vue-router'

import Vue from 'vue'
Vue.use(VueRouter)

import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import shopcar from './components/tabbar/shopcar.vue'
import search from './components/tabbar/search.vue'
import news from './components/news/newslist.vue'
import newsinfo from './components/news/newsinfo.vue'
import photolist from './components/photos/photoList.vue'
import photoDetail from './components/photos/photoDetail.vue'
import goodsList from './components/goods/goodsList.vue'
import goodsDetail from './components/goods/goodsDetail.vue'

const router = new VueRouter({
    routes: [
        { path: '/home', component: home },
        { path: '/member', component: member },
        { path: '/shopcar', component: shopcar },
        { path: '/search', component: search },
        { path: '/home/news', component: news },
        { path: '/home/newsinfo/:id', component: newsinfo },
        { path: '/home/photolist', component: photolist },
        { path: '/home/photoDetail/:id', component: photoDetail },
        { path: '/home/goodsList/', component: goodsList },
        { path: '/home/goodsDetail/:id', component: goodsDetail },
    ],
    linkActiveClass: 'mui-active',
})

export default router