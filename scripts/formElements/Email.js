import React from 'react';
import styles from '../Form.less';

const isValid = email => /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);


const Email = React.createClass({

  propTypes: {
    onChange: React.PropTypes.func.isRequired,
    isValid: React.PropTypes.func.isRequired,
    email: React.PropTypes.string.isRequired
  },


  getInitialState() {
    return {
      emailError: !isValid(this.props.email)
    };
  },


  componentDidMount() {
    this.props.onChange(this.props.email);
    this.props.isValid(!this.state.emailError);
  },


  onChange(event) {
    const email = event.target.value;
    const emailValid = isValid(email);

    this.props.onChange(email);
    this.props.isValid(emailValid);

    this.setState({
      emailError: !emailValid
    });
  },

  render() {
    return (
      <div>Your email address
        <input
          value={this.props.email}
          onChange={this.onChange}
          type="text"
          placeholder="(optional)"/>
        <br/>
        {this.state.emailError ? <span className={styles.error}>Invalid email</span> : null}
      </div>
    );
  }
});


export default Email;
