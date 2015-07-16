// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  model: SongModel,
  initialize: function(){
    this.on("add", function(event) {
      // debugger;
      event.set('isInQueue', true)
      if(this.length === 1 ) {

        this.playFirst();
      }

      this.saveAll();
      
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
      this.saveAll();
    });

  },
  playFirst: function(){
      this.first().play();
    
  },

  // parse: function(data){
  //   debugger;
  //   console.log(data);
  //   var newData = [];
  //   _.each(data, function(item){
  //     console.log(item.isInQueue);
  //     if (item.isInQueue === true){
  //       newData.push(item);
  //     }
     
  //   });
  //   return newData;
  // },

  save: function(){
    this.first().save();
  }

});