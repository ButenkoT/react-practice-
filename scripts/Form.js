const React = require('react');
const ReactPropTypes = React.PropTypes;
const AppActions = require('./actions/AppActions');

const Form = React.createClass({

  propTypes: {
    id: ReactPropTypes.string,
    placeholder: ReactPropTypes.string,
    onSave: ReactPropTypes.func.isRequired,
    value: ReactPropTypes.string
  },

  getInitialState: function () {
    return {
      title: this.props.title || '',
      url: this.props.url || '',
      name: this.props.name || 'anonymous',
      email: this.props.email || ''
    };
  },

  //validateTitle: function(data){
  //  if (!/[a-z]{3,240}/.test(data.refs.title)) {
  //    console.log("title invalid");
  //  }
  //},

  onSubmit(e) {
    e.preventDefault();

    let video = {};

    for (let key in this.refs) {
      if (this.refs.hasOwnProperty(key)) {
        video[key] = this.refs[key].getDOMNode().value;
      }
    }

    AppActions.create(video);
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
              //onBlur={this._save}
              onChange={this._onChange}
              autoFocus={true}
              required
              />
          </div>
          <div>YouTube URL
            <input
              ref="url"
              type="text"
              required
              />
          </div>
          <div>Your name
            <input
              ref="name"
              type="text"
              placeholder="anonymous"
              defaultValue="anonymous"
              />
          </div>
          <div>Your email address
            <input
              ref="email"
              type="text"
              placeholder="(optional)"
              />
          </div>
          <button type="submit">Submit entry</button>
        </form>
      </div>
    );
  },

  _save: function () {
    this.props.onSave(this.state.value);
    this.setState({
      value: ''
    });
  },

  _onChange: function (event) {
    this.setState({
      value: event.target.value
    });
  },

  _onKeyDown: function (event) {
    if (event.keyCode === 13) {
      this._save();
    }
  }

});

export default Form;