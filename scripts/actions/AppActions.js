const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');

const AppActions = {

  create(video) {
    AppDispatcher.dispatch({
      actionType: AppConstants.VIDEO_CREATE,
      video: {
        time: new Date,
        title: video.title,
        url: video.url,
        name: video.name,
        email: video.email,
        views: 0
      }
    });
  },

  incrementView(videoId){
    AppDispatcher.dispatch({
      actionType: AppConstants.VIDEO_INCREMENT_VIEW,
      id: videoId
    });
  },

  update(id, video) {
    AppDispatcher.dispatch({
      actionType: AppConstants.VIDEO_UPDATE,
      video: {
        id: id,
        title: video.title,
        url: video.url,
        name: video.name,
        email: video.email
      }
    });
  }

};

module.exports = AppActions;