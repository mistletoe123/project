// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import '../style/css/lmy.css' /*引入公共样式*/

//import loading from './loading'

import layer from 'vue-layer'

//Vue.use(loading)

Vue.prototype.$layer = layer(Vue, {
    msgtime: 1 //目前只有一项，即msg方法的默认消失时间，单位：秒
   
    
});

Vue.config.productionTip = false
Vue.prototype.$axios = axios
// 路由跳转
Vue.prototype.$goRoute = function (index) {
    this.$router.push(index);
    
}




/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
//  components: { App },
//  template: '<App/>'
    render: h => h(App)
})




