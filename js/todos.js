$(function() {

  Parse.$ = jQuery;

  // Initialize Parse with your Parse application javascript keys
  Parse.initialize("5XBSeDpBArkj413HuEUpBDCUxf9uExRXuBsp5mON",
                   "GVwV1BtRAvW5mra9lmSVemcpZAn1VLqLvQedaQO4");


  // //Rating Model
  // var Rating = Parse.Object.extend("Rating", {

  //   defaults: {
  //     score: 0,
  //   }

  // });

  // var RatingCollection = Parse.Collection.extend( {
  //   model : Rating
  // });


  //   //Company Model
  // //Contains a many to many relationship of Rating
  // var Company = Parse.Object.extend("Company", {

  //   defaults: {
  //     name: "Default Name",
  //     ratings: new RatingCollection()
  //   }

  // });

  // var AppView = Parse.View.extend( {
  //   el: $("#content"),

  //   initialize: function() {

  //   },

  //   render: function() {
  //   },

  // });

var LoginView = Parse.View.extend( {
  el: $('#content'),

  initialize: function() {
    this.render();
  },

  render: function() {
     this.$el.html(_.template($("#login-template").html()));
  },

});


var AppRouter = Parse.Router.extend({
    routes: {
      "all": "all",
      "login": "login",
      "completed": "completed"
    },

    initialize: function(options) {
    },

    login: function() {
      new LoginView;
    },

    active: function() {

    },

    completed: function() {

    }
  });

  new AppRouter;
  Parse.history.start( { pushState: true, root: "/" });


});
