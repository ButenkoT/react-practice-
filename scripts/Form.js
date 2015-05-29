import React from 'react'

export default class Form extends React.Component {
  render() {
    return(
      <div className="submitForm">
        <h4>Submit your 15 minute video entry</h4>
        <form action="">
          <div><input type="text" name="videoTitle" placeholder="Insert video title" required/></div>
          <div>YouTube URL <input type="text" name="videoURL" required/></div>
          <div>Your name <input type="text" name="userName" placeholder="anonymous"/></div>
          <div>Your email address<input type="text" name="userEmail" placeholder="(optional)"/></div>
          <button>Submit entry</button>
        </form>
      </div>
    );
  }
}