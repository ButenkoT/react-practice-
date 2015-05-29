import React from 'react'

export default class VideosList extends React.Component {
  render(){
    return(
      <div className="videosList">
        <div className="videosListHeader">
          <h4>Latest Videos</h4>

          <div className="sorting">Sort by
            <select name="sortBy">
              <option value="mRecent">Most recent</option>
              <option value="mPopular">Most popular this month</option>
            </select>
          </div>
        </div>

        <ol>
          <li>
            <div>
              <section className="votes">V</section>
              <img src="" alt=""/>
              <a href="">This is a regular video title</a>
              <div className="videoInfo">
                <p>David Lynch</p>
                <p>1month ago * 2 views</p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <section className="votes">V</section>
              <img src="" alt=""/>
              <a href="">This is a regular video title</a>
              <div className="videoInfo">
                <p>David Lynch</p>
                <p>1month ago * 2 views</p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <section className="votes">V</section>
              <img src="" alt=""/>
              <a href="">This is a regular video title</a>
              <div className="videoInfo">
                <p>David Lynch</p>
                <p>1month ago * 2 views</p>
              </div>
            </div>
          </li>
        </ol>
      </div>
    );
  }
}