const _ = require('lodash');
const React = require('react');
const VideoStore = require('./VideoStore');
const VideoItem = require('./VideoItem');
const SortVideos = require('./SortVideos');

function getVideoState() {
  return {
    allVideo: VideoStore.getAll()
  };
}

const VideosList = React.createClass({

  getInitialState: function () {
    return getVideoState();
  },

  componentDidMount: function () {
    VideoStore.addChangeListener(this._onChange);
    //TODO: add listener for SortVideos.handleChange(mPopular)?
  },

  componentWillUnmount: function () {
    VideoStore.removeChangeListener(this._onChange);
  },

  render(){

    //TODO: if selected most popular SortVideos.state.selectValue == "mPopular" => video.views highest

    let Videos = _.map(this.state.allVideo, (video, id) =>
      <VideoItem key={id} video={video}/>);

    return (
      <div className="videosList">
        <div className="videosListHeader">
          <h4>Latest Videos</h4>

          <SortVideos />

        </div>

        <ol>{Videos}</ol>

      </div>
    );
  },

  _onChange: function () {
    this.setState(getVideoState());
  }

});

export default VideosList;