// explicit installation of router needed when using CommonJS modules
Vue.use(VueRouter);

// define some simple vue components
var One = Vue.extend({
  template: '<p>Displaying route one templating data</p>'
});
var Two = Vue.extend({
  template: '<p>Displaying templating data for route two</p>'
});
var DbList = Vue.extend({
  template: '<p>To list returned db contents</p>'
});
// define an empty App component for the root view (utilising html markup instead of template data)
var App = Vue.extend({});

// new router instance
var router = new VueRouter();
// routes mapped in the router should all have an associated component.
router.map({
  '/one': { component: One },
  '/two': { component: Two },
  '/db-list': { component: DbList }
});
// create new instance of the App component and mount it to the dom selector
router.start(App, '#app');
