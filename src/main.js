import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueValidator from 'vue-validator'
import { configRouter } from './router/route.config'
import XZ from './vue-xz'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueValidator);
Vue.use(XZ);
Vue.use(Vuex);

Vue.config.debug = true;
Vue.http.options.emulateJSON = true;
var App = Vue.extend({});

var router = new VueRouter({
  linkActiveClass:'active',
  canReuse:false
 /* hashbang: false,
  history: true*/
});

configRouter(router);

Vue.$xz.options({});

Vue.filter('moment', function (value, formatString) {
    formatString = formatString || 'YYYY-MM-DD HH:mm:ss';
    return moment(value).format(formatString);
});


router.start(App, '#app');

