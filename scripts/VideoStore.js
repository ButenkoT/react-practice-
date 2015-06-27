const EventEmitter = require('events').EventEmitter;
const AppDispatcher = require('./dispatcher/AppDispatcher');
const AppConstants = require('./constants/AppConstants');


let videos = JSON.parse(localStorage.getItem('VideoStore')) || {
    [20]: {
    id: 20,
    time: new Date,
    title: "Flux and React",
    url: "https://www.youtube.com/watch?v=i__969noyAM",
    name: "David",
    email: "hello@hello.com",
    views: 3,
    votes: 3
  },

    [34]: {
      id: 34,
      time: "Tue Jun 02 2015 14:36:28 GMT+1000 (AEST)",
      title: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed in",
      url: "https://youtu.be/kIeCdrSED4g",
      name: "Samantha",
      email: "hello@me.com",
      views: 0,
      votes: 0
    }
  };

let sort = 'mostRecent';

function update(id, updates) {
  videos[id] = Object.assign({}, videos[id], updates);
  localStorage.setItem('VideoStore', JSON.stringify(videos));
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
  localStorage.setItem('VideoStore', JSON.stringify(videos));
}

function incrementView(id) {
  update(id, {views: videos[id].views + 1})
}

function incrementVotes(id) {
  update(id, {votes: videos[id].votes + 1})
}

function sortByPopularity(){
  return videos;
}

function sortByDate(){
  return videos;
}

const VideoStore = Object.assign({}, EventEmitter.prototype, {

  addChangeListener (callback) {
    this.on('change', callback);
  },

  removeChangeListener (callback) {
    this.removeListener('change', callback);
  },

  getSortedVideos () {
    if (sort === 'mostPopular'){
      return sortByPopularity();
    } else if (sort === 'mostRecent'){
      return sortByDate();
    } else {
      return videos;
    }
  },

  getSort () {
    return sort;
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

    case AppConstants.SORT_VALUE:
      sort = action.sort;
      VideoStore.emit('change');
      break;

    default:
  }
});

export default VideoStore;




