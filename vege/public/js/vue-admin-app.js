var Vue = require('vue');
var $ = require('jquery');

// booking component
var Booking = Vue.extend({
  props: ['details'],
  template: '<div>Attendee: {{ details.attendee }}</div>' +
  '<div>Seat: {{ details.seat }}</div><br>'
});

Vue.component('booking', Booking);

// define admin page vue
var adminPage = new Vue({
  el: '#admin',
  data: {
    conference: 'WDI5',
    name: 'jb',
    bookings: []
  },
  methods: {
    loadBookings: function() {
      console.log('Populating bookings');
      $.ajax({
        url: '/api/bookings',
        dataType: 'json'
      }).done(function( data ) {
        adminPage.bookings = data;
      });
    }
  }
});
