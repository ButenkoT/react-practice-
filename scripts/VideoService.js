const EventEmitter = require('events').EventEmitter;
const AppDispatcher = require('./dispatcher/AppDispatcher');
const AppConstants = require('./constants/AppConstants');

const _id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
let videos = {
  [_id]: {
    id: _id,
    time: new Date,
    title: "Funny cats",
    url: "https://youtu.be/nPER_vv2SyU",
    name: "David",
    email: "hello@hello.com",
    views: 0,
    votes: 0
  },

  [_id]: {
    id: _id,
    time: new Date,
    title: "Funny racoon Funny racoon Funny racoon Funny racoon Funny racoon Funny racoon Funny racoon Funny racoon Funny racoon Funny racoon Funny racoon Funny racoon",
    url: "https://youtu.be/kIeCdrSED4g",
    name: "Samantha",
    email: "hello@me.com",
    views: 0,
    votes: 0
  }
};

function update(id, updates) {
  videos[id] = Object.assign({}, videos[id], updates);
}

function create(video) {
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  videos[id] = {
    id: id,
    time: new Date,
    title: video.title,
    url: video.url,
    name: video.name,
    email: video.email,
    views: 0,
    votes: 0
  };
}

function incrementView(id) {
  update(id, {views: videos[id].views + 1})
}

function incrementVotes(id){
  update(id, {votes: videos[id].votes + 1})
}

const VideoStore = Object.assign({}, EventEmitter.prototype, {

  getAll: function () {
    return videos;
  },

  addChangeListener: function (callback) {
    this.on('change', callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener('change', callback);
  }

});

AppDispatcher.register(function (action) {
  switch (action.actionType) {
    case AppConstants.VIDEO_CREATE:
      const video = action.video;
      if (video) {
        create(video);
        VideoStore.emit('change');
      }
      break;

    case AppConstants.VIDEO_INCREMENT_VIEW:
      const id = action.id;
      incrementView(id);
      VideoStore.emit('change');
      break;

    case AppConstants.VIDEO_INCREMENT_VOTES:
      const id = action.id;
      incrementVotes(id);
      VideoStore.emit('change');
      break;

    case AppConstants.VIDEO_UPDATE:
      const video = action.video;
      if (video) {
        update(action.id, {video: video});
        VideoStore.emit('change');
      }
      break;

    default:
  }
});

export default VideoStore;




