import React from 'react';
import styles from './Header.less';

const Header = React.createClass({
  render() {
    return (
      <header className = {styles.Header}>
        <h1>15 Minutes Video Competition</h1>
      </header>
    );
  }
});

export default Header;