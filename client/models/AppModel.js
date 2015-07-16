// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    var that = this;
    this.set('songQueue', new SongQueue());
    params.library.on("sync", function(){
        this.forEach(function(sorcery){
          // debugger;
            if (sorcery.get('isInQueue') === true){
                that.get('songQueue').add(sorcery);
            }
        })


    }, params.library);
    // params.library.forEach(function(sorcery) {
    //     if(sorcery.get("inQueue") === true) {
    //         that.get('songQueue').add(sorcery);
            
    //     }
    // });
    // this.get('songQueue').fetch();
    this.set('currentSong', new SongModel());
    

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */


    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    params.library.on("enqueue", function(song) {
      var songQueue = this.get('songQueue');
      songQueue.add(song);
    }, this);


    // params.library.on("dequeue", function(song) {
    //   var songQueue = this.get('songQueue');
    //   songQueue.remove(song);
    // }, this);

    // params.library.on("ended", function(song) {
    //   console.log('executed');
    //   debugger;
    //   var songQueue = this.get('songQueue');
    //   songQueue.remove(song);
    // }, this);
  }

});
