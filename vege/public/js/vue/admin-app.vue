<template>
  <div class="admin">
    <h3 class="title">{{ conference }} Admin Page. {{ name }} o/</h3>
    <div>
      <input type="text" v-model="inputConference" placeholder="Conference">
      <input type="text" v-model="inputAttendee" placeholder="Attendee">
      <input type="text" v-model="inputSeat" placeholder="Seat">
      <input type="text" v-model="inputSeatScore" placeholder="Seat Score">
      <button v-on:click="addCustomBooking">Add custom booking</button>
    </div>
    <br>
    <div>
      <button v-on:click="loadBookings">Load Bookings</button>
      <button v-on:click="addRandomBooking">Add Random</button>
    </div>
    <div>Current number of bookings: {{ bookings.length }}</div>
    <br>
    <booking v-for="item in bookings" :details="bookings[$index]"></booking>
  </div>
  <br>
</template>

<style>
.admin {
background-color: linen;
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
      name: 'jb',
      bookings: [],
      inputConference: 'WDI5',
      inputAttendee: 'none',
      inputSeat: 0,
      inputSeatScore: 0
    }
  },
  methods: {
    loadBookings: function() {
      console.log('Populating bookings');
      vueContext = this;
      $.ajax({
        url: '/api/bookings',
        context: vueContext,
        dataType: 'json'
      }).done(function( data ) {
        vueContext.bookings = data;
      });
    },
    addRandomBooking: function() {
      console.log('Adding random booking');
      $.ajax({
        url: '/api/bookings/new',
        dataType: 'json',
        method: 'POST',
        data: {
          "conference": "WDI5",
          "seat": Math.ceil(Math.random() * 40),
          "seatScore": Math.ceil(Math.random() * 100),
          "attendee": "@Cake_Pudding"
        }
      });
    },
    addCustomBooking: function() {
      console.log('Adding custom booking');
      var vueContext = this;
      $.ajax({
        url: '/api/bookings/new',
        context: vueContext,
        dataType: 'json',
        method: 'POST',
        data: {
          "conference": vueContext.inputConference,
          "seat": vueContext.inputSeat,
          "seatScore": vueContext.inputSeatScore,
          "attendee": vueContext.inputAttendee
        }
      });
    }
  },
  components: {
    booking: require('./booking-app.vue')
  }
}
</script>
