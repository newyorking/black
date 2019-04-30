import Vue from 'vue'

//all
/* import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUi) */

//下载插件 局部导入 修改.babelrc
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
// axios 发送ajax
import axios from 'axios';
axios.defaults.baseURL = 'http://www.liulongbin.top:3005'
Vue.prototype.$http = axios;

import 'bootstrap/dist/css/bootstrap.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import app from './app.vue'
import router from './router'

new Vue({
    // el: '#app',
    render: c => c(app),
    router
}).$mount("#app")