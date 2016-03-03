<style>
  * {
    box-sizing: border-box;
  }
  h1 {
    padding: 20px;
  }
  #register-container {
    margin: 0 auto;
    padding-top: 5%;
    width: 70%;
    height: 100%;
    background-color: linen;
    -webkit-box-shadow: 0px 0px 19px 1px rgba(186,186,186,1);
    -moz-box-shadow: 0px 0px 19px 1px rgba(186,186,186,1);
    box-shadow: 0px 0px 19px 1px rgba(186,186,186,1);
  }
  #register-container h1 {
    text-align: center;
  }
  #register-social {
    padding: 0;
    list-style: none;
    text-align: center;
  }
  #register-social li {
    display: inline;
    padding: 0 15px 0 15px;
  }
  #register-social img {
    width: 50px;
    height: 50px;
  }
  form {
    margin: 0 auto;
    width: 80%;
  }
  form input {
    text-align: center;
    height: 1.5em;
    font-size: 1.5em;
    font-weight: 600;
    border-bottom: 1px solid;
    padding: 5px 20px 5px 20px;
    margin: 0px 0px 20px 0px;
    border: none;
    background-color: rgba(0, 0, 0, 0.2);
    outline: none;
  }
  form .name {
    width:50%;
    float: left;
  }
  form .email {
    width: 100%;
  }
  form button {
    display: block;
    margin: 0 auto;
    padding: 15px;
    font-weight: 500;
    font-size: .8em;
    letter-spacing: .1em;
    border-radius: 0px;
    background-color: white;
    border: none;
  }
</style>
​
<template>
  <div id="register-container">
​
    <h1>Register with Social Media</h1>
      <ul id="register-social">
        <li><a href="#"><img src="./images/twitter.png" /></a></li>
        <li><a href="#"><img src="./images/github.svg" /></a></li>
        <li><a href="#"><img src="./images/facebook.png" /></a></li>
      </ul>
    <h1> OR </h1>
​
    <div id="register-form">
      <input v-model="firstName" type="text" class="name" name="first-name" placeholder="First Name" />
      <input v-model="lastName" type="text" class="name" name="last-name" placeholder="Last Name" />
      <input v-model="email" type="email" class="email" name="email" placeholder="Email Address" />
​
      <button v-on:click="dispatchFromRegister">Book Your Seat</button>
    </div>
    <div>
      {{ firstName }} {{ lastName }}
    </div>
  </div>
</template>
​
<script>
module.exports = {
  data: function() {
    return {
      firstName: '',
      lastName: '',
      email: ''
    }
  },
  methods: {
    dispatchFromRegister: function() {
      this.$dispatch('register-confirm', true);
    }
  }
};
</script>
