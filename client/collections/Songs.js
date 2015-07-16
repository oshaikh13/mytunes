// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  initialize: function(data) {
    this.on("play", function(event) {
    }, this);
  },

  localStorage: new Backbone.LocalStorage('songs'),

  saveAll: function(){
    this.forEach(function(item){
      item.save();
    });
  },

  parse: function(data){
    console.log(data);

    return data;
  }

});