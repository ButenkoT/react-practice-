const React = require('react');
const VideoService = require('./VideoService.js');

function getVideoState() {
  return {
    allVideo: VideoService.getAll()
  };
}

const VideosList = React.createClass({

  getInitialState: function() {
    return getVideoState();
  },

  componentDidMount: function() {
    VideoService.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    VideoService.removeChangeListener(this._onChange);
  },

  render(){
    return(
      <div className="videosList">
        <div className="videosListHeader">
          <h4>Latest Videos</h4>

          <div className="sorting">Sort by
            <select name="sortBy">
              <option value="mRecent">Most recent</option>
              <option value="mPopular">Most popular this month</option>
            </select>
          </div>
        </div>

        <ol>
          <li>
            <div>
              <section className="votes">V</section>
              <img src="" alt=""/>
              <a href="">video regular title</a>
              <div className="videoInfo">
                <p>David Lynch</p>
                <p>1month ago * 2 views</p>
              </div>
              <div>allVideo={JSON.stringify(this.state.allVideo)}</div>
            </div>
          </li>
        </ol>
      </div>
    );
  },

  _onChange: function() {
    this.setState(getVideoState());
  }
});

export default VideosList;