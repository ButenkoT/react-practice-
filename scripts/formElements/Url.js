import React from 'react';
import url from 'url';
import styles from '../Form.less';
import querystring from 'querystring';
import path from 'path';
import request from 'browser-request';

//const isValid = url => /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(url);

function isValid(videoUrl) {
  let urlObject = url.parse(videoUrl);
  //console.log(urlObject);

  let queryCode = querystring.parse(urlObject.query);
  let id = queryCode.v;
  let myApiKey = "AIzaSyBrQBtzrVS8uokkoERCzSbyDevif0zFXoI";

  let x = "https://www.googleapis.com/youtube/v3/videos?id={id}&key={myApiKey}&part=contentDetails";
  console.log(id);
  request(x, function (error, response, body) {
    if (!error && response.statusCode == 200) {

      console.log(body); // Show the HTML for the Modulus homepage.
    }
  });

  let videoLength = querystring.parse(x);
  //console.log (videoLength);

  if ((urlObject.hostname === "www.youtube.com" || urlObject.hostname === "youtu.be") && /[\w]{0,200}/.test(videoUrl)) {
    return true;
  }

}

const Url = React.createClass({


  propTypes: {
    onChange: React.PropTypes.func.isRequired,
    isValid: React.PropTypes.func.isRequired,
    url: React.PropTypes.string.isRequired
  },

  getInitialState() {
    return {
      urlError: !isValid(this.props.url)
    };
  },

  componentDidMount() {
    this.props.onChange(this.props.url);
    this.props.isValid(!this.state.urlError);
  },

  onChange(event) {
    const url = event.target.value;
    const urlValid = isValid(url);

    this.props.onChange(url);
    this.props.isValid(urlValid);

    this.setState({
      urlError: !urlValid
    });
  },

  //isValid(video) {
  //
  //  let urlObject = url.parse(video.url);
  //
  //  if (!(urlObject.hostname === "www.youtube.com" || urlObject.hostname === "youtu.be")) {
  //    this.setState({urlError: 'Only YouTube videos are allowed'});
  //    isValid = false;
  //  } else {
  //    this.setState({urlError: false})
  //  }
  //
  //  if (!/[\w]{0,200}/.test(video.url)) {
  //    this.setState({urlError: "Invalid URL"});
  //    isValid = false;
  //  } else {
  //    this.setState({urlError: false})
  //  }
  //},

  render(){
    return (
      <div>YouTube URL
        <input
          value={this.props.url}
          onChange={this.onChange}
          type="text"
          required/>
        <br/>
        {this.state.urlError ? <span className={styles.error}>Only YouTube videos are allowed</span> : null}
      </div>
    );
  }
});

export default Url;