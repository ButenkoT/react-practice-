import React from 'react';
import styles from './Footer.less';

const Footer = React.createClass({
  render() {
    return (
      <footer className = {styles.Footer}>
        <p>2015 &copy; Tanya Butenko</p>
      </footer>
    );
  }
});

export default Footer;