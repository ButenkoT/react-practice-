const EventEmitter = require('events').EventEmitter;

let videos = [];

const VideoStore = Object.assign({}, EventEmitter.prototype, {

  getAll: function() {
    return videos;
  },

  create: function(video) {
    videos.push(video);
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});

module.exports = VideoStore;




