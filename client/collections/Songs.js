// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  initialize: function(data) {
    this.on("play", function(event) {
    }, this);
  }

});