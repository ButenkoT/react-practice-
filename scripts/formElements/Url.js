import React from 'react';
import url from 'url';


//const isValid = url => /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(url);

function isValid(videoUrl){
  let urlObject = url.parse(videoUrl);
  if ((urlObject.hostname === "www.youtube.com" || urlObject.hostname === "youtu.be") && /[\w]{0,200}/.test(videoUrl)){
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
    return(
      <div>YouTube URL
        <input
          value={this.props.url}
          onChange={this.onChange}
          type="text"
          required/>
        <br/>
        {this.state.urlError ? <span className="error">Only YouTube videos are allowed</span> : null}
      </div>
    );
  }
});

export default Url;