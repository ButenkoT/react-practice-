import _ from 'lodash';
import React from 'react';
import VideoStore from './VideoStore';
import VideoItem from './VideoItem';
import SortVideos from './SortVideos';
import styles from './VideosList.less';

function getVideoState() {
  return {
    allVideo: VideoStore.getSortedVideos()
  };
}

const VideosList = React.createClass({

  getInitialState: function () {
    return getVideoState();
  },

  componentDidMount: function () {
    VideoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    VideoStore.removeChangeListener(this._onChange);
  },

  render(){

    let Videos = _.map(this.state.allVideo, (video, id) =>
      <VideoItem key={id} video={video}/>);

    return (
      <div className={styles.videosList}>
        <div className={styles.videosListHeader}>
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