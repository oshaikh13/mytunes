// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.render();
    // this.collection.on("add", this.render, this);
    this.collection.on('remove', this.render, this);
    this.collection.on("add", function(event) {
      if(this.collection.length === 1) {
        this.collection.playFirst();
      }
      this.render();
    }, this);
    this.collection.on("ended",function(event) {
      this.collection.remove(event);
      this.collection.playFirst();
    },this);
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  },

});
