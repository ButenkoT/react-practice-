const EventEmitter = require('events').EventEmitter;
const AppDispatcher = require('./dispatcher/AppDispatcher');
const AppConstants = require('./constants/AppConstants');

let videos = {};

function update(id, updates) {
  videos[id] = Object.assign({}, videos[id], updates);
}

const VideoStore = Object.assign({}, EventEmitter.prototype, {

  getAll: function() {
    return videos;
  },

  create: function(video){
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    videos[id] = {
      id: id,
      title: video.title,
      url: video.url,
      name: video.name,
      email: video.email
    };
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

AppDispatcher.register(function(action) {
  let video;

  switch(action.actionType) {
    case AppConstants.VIDEO_CREATE:
      video = action.video.trim();
      if (video !== '') {
        VideoStore.create(video);
        VideoStore.emit('change');
      }
      break;

    case AppConstants.VIDEO_UPDATE:
      video = action.video.trim();
      if (video !== '') {
        update(action.id, {video: video});
        VideoStore.emit('change');
      }
      break;

    default:
  }
});

export default VideoStore;




