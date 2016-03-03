var Vue = require('vue');
var ConfBookingApp = require('./vue/conf-booking-app.vue');
var $ = require('jquery');

Vue.component('conf-booking-app', ConfBookingApp);

new Vue({
  el: '#booking-app'
})
