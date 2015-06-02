const _ = require('lodash');
const moment = require('moment');
const url = require('url');
const path = require('path');
const querystring = require('querystring');
const React = require('react');
const VideoService = require('./VideoService');
const AppActions = require('./actions/AppActions');

function getVideoState() {
  return {
    allVideo: VideoService.getAll()
  };
}


function videoImage(videoUrl) {
  let id;
  let urlObject = url.parse(videoUrl);

  if (urlObject.hostname == "youtu.be") {
    id = path.basename(urlObject.pathname);
  } else {
    let queryCode = querystring.parse(urlObject.query);
    id = queryCode.v;
  }
  return `http://img.youtube.com/vi/${id}/2.jpg`;
}


const VideoItem = React.createClass({

  countViews() {
    AppActions.incrementView(this.props.video.id);
  },

  countVotes(){
    AppActions.incrementVotes(this.props.video.id);
  },

  render() {
    const {video} = this.props;
    const timeVideoAdded = moment().startOf(video.time).fromNow();
    const cover = videoImage(video.url);
    return (
      <li>
        <div>
          <section className="votes" onClick={this.countVotes}>
            <img src="scripts/images/votes_up_arrow.png"/>
            {video.votes}
          </section>
          <img src={cover} alt=""/>
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