const _ = require('lodash');
const moment = require('moment');
const URL = require('url');
const PATH = require('path');
const querystring = require('querystring');
const React = require('react');
const VideoService = require('./VideoService');
const AppActions = require('./actions/AppActions');

function getVideoState() {
  return {
    allVideo: VideoService.getAll()
  };
}

const VideoItem = React.createClass({

  video_image(url){
    let path;
    let urlObject = URL.parse(url);

    if (urlObject.hostname == "youtu.be"){
      path = PATH.basename(urlObject.pathname);
    } else {
      let queryCode = querystring.parse(urlObject.query);
      path = queryCode.v;
    }
    return `http://img.youtube.com/vi/${path}/2.jpg`;
  },

  countViews() {
    AppActions.incrementView(this.props.video.id);
  },

  countVotes(){
    AppActions.incrementVotes(this.props.video.id);
  },

  render() {
    const {video} = this.props;
    const timeVideoAdded = moment().startOf(video.time).fromNow();
    const videoImage = this.video_image(video.url);
    return (
      <li>
        <div>
          <section className="votes" onClick={this.countVotes}>
            <img src="scripts/images/votes_up_arrow.png"/>
            {video.votes}
          </section>
          <img src={videoImage} alt=""/>
          <a href={video.url} onClick={this.countViews} target="_blank">{video.title}</a>

          <div className="videoInfo">
            <p>{video.name}</p>

            <p>{timeVideoAdded} * {video.views} views</p>
          </div>
        </div>
      </li>
    );
  }
});

const VideosList = React.createClass({

  getInitialState: function () {
    return getVideoState();
  },

  componentDidMount: function () {
    VideoService.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    VideoService.removeChangeListener(this._onChange);
  },

  render(){

    let Videos = _.map(this.state.allVideo, (video, id) =>
      <VideoItem key={id} video={video}/>);

    return (
      <div className="videosList">
        <div className="videosListHeader">
          <h4>Latest Videos</h4>

          <div className="sorting">Sort by:
            <select name="sortBy">
              <option value="mRecent">Most recent</option>
              <option value="mPopular">Most popular this month</option>
            </select>
          </div>
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