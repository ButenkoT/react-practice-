const EventEmitter = require('events').EventEmitter;
import AppDispatcher from './dispatcher/AppDispatcher';
import AppConstants from './constants/AppConstants';


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
      time: new Date,
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
  return _.sortByOrder(videos, ['views'], [false]);
}

function sortByDate(){
  return _.sortByOrder(videos, ['time'], [false]);
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
      return _.values(videos);
    }
  },

  getSort () {
    return sort;
  }

});

AppDispatcher.register(function (action) {
  const video = action.video;
  const id = action.id;
  switch (action.actionType) {

    case AppConstants.VIDEO_CREATE:
      if (video) {
        create(video);
        VideoStore.emit('change');
      }
      break;

    case AppConstants.VIDEO_INCREMENT_VIEW:
      incrementView(id);
      VideoStore.emit('change');
      break;

    case AppConstants.VIDEO_INCREMENT_VOTES:
      incrementVotes(id);
      VideoStore.emit('change');
      break;

    case AppConstants.VIDEO_UPDATE:
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




