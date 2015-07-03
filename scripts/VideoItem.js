import moment from 'moment';
import url from 'url';
import path from 'path';
import querystring from 'querystring';
import React from 'react';
import AppActions from './actions/AppActions';
import styles from './VideoItem.less';


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
    const timeVideoAdded = moment(video.time).fromNow();
    const cover = videoImage(video.url);

    return (
      <li>
        <div className={styles.competitionVideo}>

          <section className={styles.votes} >
            <img src="scripts/images/votes_up_arrow.png" alt="voting arrow" onClick={this.countVotes}/>

            <p>{video.votes}</p>

            <p>votes</p>
          </section>

          <img className={styles.coverImage} src={cover} alt="video cover"/>

          <section className={styles.videoDescription}>
            <a href={video.url} onClick={this.countViews} target="_blank">{video.title}</a>

            <div className={styles.videoInfo}>
              <p>{video.name}</p>

              <p>{timeVideoAdded} * {video.views} views</p>
            </div>
          </section>
        </div>
      </li>
    );
  }
});


export default VideoItem;