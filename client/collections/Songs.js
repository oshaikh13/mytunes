// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  localStorage: new Backbone.LocalStorage('songs'),
  initialize: function(data) {
    // this.on("add", function(model, collection){
    //   function
    // }, this);
  },


  saveAll: function(){
    this.forEach(function(item){
      item.save();
    });
  },
});