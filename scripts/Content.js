import React from 'react';
import Form from './Form';
import VideosList from './VideosList';
import AppActions from './actions/AppActions';
import styles from './Content.less';

const Content = React.createClass({
  render() {
    return (
      <section className={styles.Content}>
        <Form onSubmit={this.onSubmit}/>
        <VideosList />
      </section>
    );
  },

  onSubmit: function(video) {
    if (video.trim()) {
      AppActions.create(video);
    }
  }
});

export default Content;