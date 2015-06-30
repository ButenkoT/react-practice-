import React from 'react';
import AppActions from './actions/AppActions';
import Email from './formElements/Email';
import Title from './formElements/Title';
import Name from './formElements/Name';
import Url from './formElements/Url';


const Form = React.createClass({

  propTypes: {
    onSubmit: React.PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      title: '',
      titleValid: false,
      url: '',
      urlValid: false,
      name: 'anonymous',
      nameValid: false,
      email: '',
      emailValid: false
    };
  },

  onSubmit() {
    if (this.state.titleValid && this.state.nameValid && this.state.urlValid && this.state.emailValid) {
      AppActions.create({
        title: this.state.title,
        url: this.state.url,
        name: this.state.name,
        email: this.state.email
      });

      this.setState({title: '', url: '', name: '', email: ''});
    } else {
      console.log('NOPE!');
    }
  },

  //  for (let key in this.refs) {
  //    if (this.refs.hasOwnProperty(key)) {
  //      video[key] = this.refs[key].getDOMNode().value;
  //    }
  //  }

  render() {
    return (
      <div className="submitForm">
        <h4>Submit your 15 minute video entry</h4>

        <form onSubmit={this.onSubmit} validate>

          <Title title={this.state.title}
                 onChange={title => this.setState({title})}
                 isValid={titleValid => this.setState({titleValid})}></Title>

          <Url url={this.state.url}
                 onChange={url => this.setState({url})}
                 isValid={urlValid => this.setState({urlValid})}></Url>


          <Name name={this.state.name}
                 onChange={name => this.setState({name})}
                 isValid={nameValid => this.setState({nameValid})}></Name>


          <Email email={this.state.email}
                 onChange={email => this.setState({email})}
                 isValid={emailValid => this.setState({emailValid})}></Email>

          <button type="submit" value="Post">Submit entry</button>

        </form>
      </div>
    );
  }

});

export default Form;