<template>
  <div class="seat-container">
    <div class="conf-seat" v-bind:class="{ 'booked': isBooked, 'selected': isSelected }" v-on:click="toggleSelected">
      <p>{{ item.seat }}</p>
      <p id="seat-score">{{ item.seatScore }}</p>
    </div>
    <p>{{ item.attendee }}</p>
  </div>
</template>
​
<style>
.booking-container {
  width: 90%;
  height: 80vh;
  margin: 0 auto;
}
.seat-container {
  box-sizing: border-box;
  padding: 2%;
  width: 20%;
  height: 30%;
  float: left;
  background-color: linen;
  border: 1px solid grey;
}
.conf-seat {
  margin: 0 auto;
  width: 60px;
  height: 110px;
  border: 5px solid grey;
  border-radius: 5px;
}
.conf-seat:hover {
  background-color: rgba(255, 0, 0, 0.5);
  cursor: pointer;
}
.booked {
  background-color: red;
}
.selected {
  background-color: grey;
}
.booked.selected {
  background-color: fuchsia;
}
#seat-score {
  text-align: center;
  line-height: 100px;
  font-weight: bold;
  font-size: 1.5em;
}
</style>
​
<script>
module.exports = {
  data: function() {
    return {
      isBooked: false,
      isSelected: false
    }
  },
  ready: function() {
    this.isBooked = ( this.item.attendee != 'none');
  },
  methods: {
    toggleSelected: function() {
      this.$dispatch('seat-selected', true);
      this.isSelected = !this.isSelected;
    }
  },
  events: {
    'seat-selected': function (data) {
      if (data) {
        // if any seat is selected receive event from parent to turn off selection.
        this.isSelected = false;
      }
    }
  },
  props: ['item', 'index']
};
</script>
