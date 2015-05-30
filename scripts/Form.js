const React = require('react');
const VideoService = require('./VideoService.js');

const Form = React.createClass({

  onSubmit(e) {
    e.preventDefault();

    let video = {};
    for (let key in this.refs) {
      if (this.refs.hasOwnProperty(key)) {
        video[key] = this.refs[key].getDOMNode().value;
      }
    }

    VideoService.create(video);
  },

  render() {
    return (
      <div className="submitForm">
        <h4>Submit your 15 minute video entry</h4>

        <form action="" onSubmit={this.onSubmit}>
          <div>
            <input ref="title" type="text" placeholder="Insert video title" required/>
          </div>
          <div>YouTube URL
            <input ref="url" type="text" required/>
          </div>
          <div>Your name
            <input ref="name" type="text" placeholder="anonymous" defaultValue="anonymous"/>
          </div>
          <div>Your email address
            <input ref="email" type="text" placeholder="(optional)"/>
          </div>
          <button type="submit">Submit entry</button>
        </form>
      </div>
    );
  }
});

export default Form;