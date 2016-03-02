
<template>
  <div class="admin">
    <h3 class="title">{{ conference }} Admin Page. {{ name }} o/</h3>
    <div>
      <button v-on:click="loadBookings">Load Bookings</button>
    </div>
    <div>Current number of bookings: {{ bookings.length }}</div>
    <div v-for="b in bookings" :details="bookings[$index]">{{ b.attendee }}</div>
  </div>
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
      bookings: []
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
      }, this);
    }
  }
}
</script>
