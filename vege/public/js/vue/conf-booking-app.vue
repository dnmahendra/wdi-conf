<template>
  <div class="conf-booking">
    <h3 class="title">{{ conference }} Booking Page</h3>
    <register v-if="showRegister"></register>
    <seating :details="bookings" v-if="showSeating"></seating>
    <confirmation :details="bookings[0]" v-if="showConfirmation"></confirmation>
  </div>
</template>

<style>
.booking-conf {
background-color: plum;
}
.title {
text-align: center;
}
</style>

<script>
var $ = require('jquery');

module.exports = {
  data: function() {
    return {
      conference: 'WDI5',
      bookings: [],
      showRegister: true,
      showSeating: false,
      showConfirmation: false
    }
  },
  components: {
    register: require('./register.vue'),
    seating: require('./seating.vue'),
    confirmation: require('./booking-app.vue')
  },
  events: {
    'register-confirm': function (data) {
      if (data) {
        this.showRegister = false;
        this.showSeating = true;
      }
    }
  },
  ready: function() {
    console.log('Populating bookings');
    vueContext = this;
    $.ajax({
      url: '/api/bookings',
      context: vueContext,
      dataType: 'json'
    }).done(function( data ) {
      console.log('Bookings data has been fetched.')
      vueContext.bookings = data;
    });
  }
}
</script>
