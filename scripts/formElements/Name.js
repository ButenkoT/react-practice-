import React from 'react';

const isValid = name => /[\w\s]{0,50}/.test(name);

const Name = React.createClass({

  propTypes: {
    onChange: React.PropTypes.func.isRequired,
    isValid: React.PropTypes.func.isRequired,
    name: React.PropTypes.string.isRequired
  },

  getInitialState() {
    return {
      nameError: !isValid(this.props.name)
    };
  },

  componentDidMount() {
    this.props.onChange(this.props.name);
    this.props.isValid(!this.state.nameError);
  },

  onChange(event) {
    const name = event.target.value;
    const nameValid = isValid(name);

    this.props.onChange(name);
    this.props.isValid(nameValid);

    this.setState({
      nameError: !nameValid
    });
  },

  render(){
    return(
      <div>Your name
        <input
          value={this.props.name}
          onChange={this.onChange}
          type="text"
          placeholder="anonymous"/>
        <br/>
        {this.state.nameError ? <span className="error">Name should be not longer then 50 symbols</span> : null}
      </div>
    );
    }
});

export default Name;
