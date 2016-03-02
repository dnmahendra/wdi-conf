var Vue = require('vue');
var AdminApp = require('./vue/admin-app.vue');
var $ = require('jquery');

Vue.component('admin-app', AdminApp);

new Vue({
  el: 'body'
})
