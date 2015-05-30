const EventEmitter = require('events').EventEmitter;

let videos = [];


const VideoStore = Object.assign({}, EventEmitter.prototype, {

  getAll: function() {
    return videos;
  },

  create(video) {
    videos.push(video);
    this.emit('change');
  }
  //
  //emitChange: function() {
  //  this.emit(CHANGE_EVENT);
  //},
  //
  //addChangeListener: function(callback) {
  //  this.on(CHANGE_EVENT, callback);
  //},
  //
  //removeChangeListener: function(callback) {
  //  this.removeListener(CHANGE_EVENT, callback);
  //}
});

module.exports = VideoStore;




