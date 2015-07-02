import React from 'react';
import Form from './Form';
import VideosList from './VideosList';
import AppActions from './actions/AppActions';

const Content = React.createClass({
  render() {
    return (
      <section className="mainContent">
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