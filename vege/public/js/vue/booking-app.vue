<template>
  <div class="booking">
    <div>Attendee: {{ details.attendee }}</div>
    <div>Seat: {{ details.seat }}</div>
    <div>Seat score: {{ details.seatScore }}</div>
    <button v-on:click="deleteBooking">Delete Booking</button>
  </div>
  <br>
</template>

<style>
.booking {
background-color: plum;
}
</style>

<script>
var $ = require('jquery');

module.exports = {
  methods: {
    deleteBooking: function() {
      var vueContext = this;
      $.ajax({
        url:'/api/bookings/' + vueContext.details._id,
        method: 'DELETE'
      }).done( function() {
        console.log('API call to delete record has returned.');
      });
    }
  },
  props: ['details']
}
</script>
