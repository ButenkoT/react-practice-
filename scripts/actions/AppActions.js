const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');

const AppActions = {

  create: function(video) {
    AppDispatcher.dispatch({
      actionType: AppConstants.VIDEO_CREATE,
      title: video.title,
      url: video.url,
      name: video.name,
      email: video.email
    });
  },

  update: function(id, video) {
    AppDispatcher.dispatch({
      actionType: AppConstants.VIDEO_UPDATE,
      id: id,
      title: video.title,
      url: video.url,
      name: video.name,
      email: video.email
    });
  }

};

module.exports = AppActions;