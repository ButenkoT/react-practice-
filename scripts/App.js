const React = require('react');
const Header = require('./Header');
const Content = require('./Content');
const Footer = require('./Footer');


const App = React.createClass({

  //getInitialState() {
  //  return {
  //    title: '',
  //    titleValid: false
  //  }
  //},
  //
  //
  //onClickSubmit() {
  //  if (this.state.emailValid && this.state.titleValid) {
  //    //VideoActions.create({
  //    //  email: this.state.email,
  //    //  url: this.state.url
  //    //});
  //    this.setState({title: '', email: ''});
  //  } else {
  //    console.log('NOPE!');
  //  }
  //},
  //
  //
  //render() {
  //  return (
  //    <div>
  //
  //
  //      <Title
  //        title={this.state.title}
  //        onChange={title => this.setState({title})}
  //        isValid={titleValid => this.setState({titleValid})}/>
  //
  //      <p>Title: {this.state.title}</p>
  //      <p>Title is valid: {this.state.titleValid ? 'Yes' : 'No'}</p>
  //
  //      <button onClick={this.onClickSubmit}>Submit!!!</button>
  //
  //    </div>
  //  );
  render(){
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
});

export default App;