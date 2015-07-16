// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  model: SongModel,
  initialize: function(){
    this.on("add", function(event) {
      debugger;
      event.set('isInQueue', true)
      if(this.length === 1 ) {

        this.playFirst();
      }
      debugger;
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

    this.on('remove', function(song) {
      song.set('isInQueue', false);
    });

  },
  playFirst: function(){
      this.first().play();
    
  }

});