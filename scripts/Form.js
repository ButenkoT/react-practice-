const React = require('react');
const url = require('url');
const ReactPropTypes = React.PropTypes;
const AppActions = require('./actions/AppActions');

const Form = React.createClass({

  propTypes: {
    id: ReactPropTypes.string,
    placeholder: ReactPropTypes.string
  },

  getInitialState: function () {
    return {
      title: this.props.title || '',
      titleError: false,
      url: this.props.url || '',
      urlError: false,
      name: this.props.name || 'anonymous',
      nameError: false,
      email: this.props.email || '',
      emailError: false
    };
  },

  isValid(video) {

    let isValid = true;

    if (!/[\w\s]{3,100}/.test(video.title)) {
      this.setState({titleError: 'Title should be between 3 and 100 symbols'});
      isValid = false;
    } else {
      this.setState({titleError: false})
      isValid = true;
    }

    let urlObject = url.parse(video.url);

    if (urlObject.pathname !== "www.youtube.com" || urlObject.pathname !== "youtu.be"){
      this.setState({urlError: 'Only YouTube videos are allowed'});
      isValid = false;
    } else {
      this.setState({urlError: false})
      isValid = true;
    }

    if (!/[\w]{10,200}/.test(video.url)) {
      this.setState({urlError: "Invalid URL"});
      isValid = false;
    } else {
      this.setState({urlError: false})
      isValid = true;
    }

    if (!/[\w\s]{0,50}/.test(video.name)) {
      this.setState({nameError: 'Name should be not longer then 50 symbols'});
      isValid = false;
    } else {
      this.setState({nameError: false})
      isValid = true;
    }

    if (video.email && !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(video.email)) {
      this.setState({emailError: 'Invalid email'});
      isValid = false;
    } else {
      this.setState({emailError: false})
      isValid = true;
    }

    return isValid;
  },

  onSubmit(e) {
    e.preventDefault();

    let video = {};

    for (let key in this.refs) {
      if (this.refs.hasOwnProperty(key)) {
        video[key] = this.refs[key].getDOMNode().value;
      }
    }

    if (this.isValid(video)) {
      if (video.name === ""){
        video.name = "anonymous";
      }
      AppActions.create(video);
    }
  },

  render() {
    return (
      <div className="submitForm">
        <h4>Submit your 15 minute video entry</h4>

        <form action="" onSubmit={this.onSubmit} validate>

          <div>
            <input
              type="text"
              ref="title"
              placeholder="Insert video title"
              id={this.props.id}
              autoFocus={true}
              required/>
            <br/>
            {this.state.titleError ? <span>{this.state.titleError}</span> : null}
          </div>

          <div>YouTube URL
            <input
              ref="url"
              type="text"
              required/>
            <br/>
            {this.state.urlError ? <span>{this.state.urlError}</span> : null}
          </div>

          <div>Your name
            <input
              ref="name"
              type="text"
              placeholder="anonymous"
              defaultValue="anonymous"/>
            <br/>
            {this.state.nameError ? <span>{this.state.nameError}</span> : null}
          </div>

          <div>Your email address
            <input
              ref="email"
              type="text"
              placeholder="(optional)"/>
            <br/>
            {this.state.emailError ? <span>{this.state.emailError}</span> : null}
          </div>

          <button type="submit">Submit entry</button>

        </form>
      </div>
    );
  }

});

export default Form;