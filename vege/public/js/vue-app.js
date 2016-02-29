var Vue = require('vue');
var $ = require('jquery');
// var VueRouter = require('vue-router');
// var $ = require('jquery');
// // explicit installation of router needed when using CommonJS modules
// Vue.use(VueRouter);
//
// // define some simple vue components
// var One = Vue.extend({
//   template: '<p>Displaying route one templating data</p>'
// });
// var Two = Vue.extend({
//   template: '<p>Displaying templating data for route two</p>'
// });
// var DbList = Vue.extend({
//   template: '<p>To list returned db contents</p>'
// });
// // define an empty App component for the root view (utilising html markup instead of template data)
// var App = Vue.extend({});
//
// var DbEntry = Vue.extend({
//   template: '<div><ul><li>{{ bookedBy }} in seat with score</li></ul></div>',
//   data: function () {
//     // return $.ajax('/api/bookings').done( function(data) {
//     //   var result = { bookings: [] }
//     //   for (var i = 0; i < data.length; i++) {
//     //     console.log("Booked by: ", data[i].bookedBy);
//     //     result.bookings << { bookedBy : data[i].bookedBy }
//     //   }
//     //   return result;
//     // });
//     return {
//       conference: "WDI-Conf",
//       speaker: "JB",
//       seat: 1,
//       seatScore: 100,
//       bookedBy: "@bairstow"
//     };
//   }
// });
//
// // new router instance
// var router = new VueRouter();
// // routes mapped in the router should all have an associated component.
// router.map({
//   '/one': { component: One },
//   '/two': { component: Two },
//   '/db-list': { component: DbEntry }
// });
// // create new instance of the App component and mount it to the dom selector
// router.start(App, '#app');

// var appTest = new Vue({
//   el: '#app-test',
//   data: {
//     newTodo: '',
//     todos: [
//       { text: 'Add some todos' }
//     ]
//   },
//   methods: {
//     addTodo: function() {
//       var text = this.newTodo.trim();
//       if (text) {
//         this.todos.push({ text: text });
//         this.newTodo = '';
//       }
//     },
//     removeTodo: function(index) {
//       this.todos.splice(index, 1);
//     }
//   }
// });

var
