// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  model: SongModel,
  initialize: function(){
    this.on("add", function(event) {
      if(this.length === 1 ) {

        this.playFirst();
      }
    }, this);

    this.on("dequeue", function(song) {
      this.remove(song);
    }, this);


    this.on("ended",function() {
      this.remove(this.first());
      if(this.length >= 1) {
        this.playFirst();
      }
    },this);

  },
  playFirst: function(){
      this.first().play();
    
  }

});