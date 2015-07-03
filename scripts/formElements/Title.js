import React from 'react';
import styles from '../Form.less';


const isValid = title => /[\w\s]{3,100}/.test(title);

const Title = React.createClass({

  propTypes: {
    onChange: React.PropTypes.func.isRequired,
    isValid: React.PropTypes.func.isRequired,
    title: React.PropTypes.string.isRequired
  },

  getInitialState() {
    return {
      titleError: !isValid(this.props.title)
    };
  },

  componentDidMount() {
    this.props.onChange(this.props.title);
    this.props.isValid(!this.state.titleError);
  },


  onChange(event) {
    const title = event.target.value;
    const titleValid = isValid(title);

    this.props.onChange(title);
    this.props.isValid(titleValid);

    this.setState({
      titleError: !titleValid
    });
  },

  render(){
    return (
      <div>
        <input
          value={this.props.title}
          type="text"
          onChange={this.onChange}
          placeholder="Insert video title"
          autoFocus={true}
          required/>
        <br/>
        {this.state.titleError ? <span className={styles.error}>Title should be between 3 and 100 symbols</span> : null}
      </div>
    );
  }
});

export default Title;
