define(['src/Song'], function(song) {

  console.log('loading...');
  var player = function Player() {
  }
  player.prototype.play = function(song) {
    this.currentlyPlayingSong = song;
    this.isPlaying = true;
  };

  player.prototype.pause = function() {
    this.isPlaying = false;
  };

  player.prototype.resume = function() {
    if (this.isPlaying) {
      throw new Error("song is already playing");
    }

    this.isPlaying = true;
  };

  player.prototype.makeFavorite = function() {
    this.currentlyPlayingSong.persistFavoriteStatus(true);
  };

  return player;
})
