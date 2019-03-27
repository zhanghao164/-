import Vue from 'vue'
import App from './App'
import 'normalize.css'

//订单模板页
import orderForm from './components/orderForm/orderForm.vue';
Vue.component('order-form', orderForm);

//优惠券模板页
import coupons from './components/coupons/coupons.vue';
Vue.component('coupons', coupons);

//常见问题模板页
import FAQ from './components/FAQ/FAQ.vue';
Vue.component('faq', FAQ);

//关于我们模板页
import aboutUs from './components/aboutUs/aboutUs.vue';
Vue.component('about-us', aboutUs);

//个人中心 首页
import mineIndex from './components/mineIndex/mineIndex.vue';
Vue.component('mine-index', mineIndex);



// //底部tabBar
// import tabBar from './components/tabBar/tabBar.vue';
// Vue.component('tab-bar', tabBar);


Vue.config.productionTip = false

App.mpType = 'app'

import store from './store/index'

Vue.prototype.$serverUrl = 'http://192.168.16.128:8000';
Vue.prototype.$store = store  //  vuex

const app = new Vue({
	store,
    ...App
})
app.$mount()
