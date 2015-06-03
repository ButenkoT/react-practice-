const React = require('react');
const Form = require('./Form');
const VideosList = require('./VideosList');
const AppActions = require('./actions/AppActions');

const Content = React.createClass({
  render() {
    return (
      <section className="mainContent">
        <Form onSave={this._onSave}/>
        <VideosList />
      </section>
    );
  },

  _onSave: function(video) {
    if (video.trim()) {
      AppActions.create(video);
    }
  }
});

export default Content;