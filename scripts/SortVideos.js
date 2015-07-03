import React from 'react';
import VideoStore from './VideoStore';
import AppActions from './actions/AppActions';
import styles from './VideoItem.less';

function getSelectState() {
  return {
    sortOption: VideoStore.getSort()
  };
}

const SortVideos = React.createClass({

  getInitialState () {
    return getSelectState();
  },

  componentDidMount: function () {
    VideoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    VideoStore.removeChangeListener(this._onChange);
  },

  handleChange (e) {
    AppActions.changeSort(e.target.value)
  },

  render() {

    return (
      <div className={styles.sorting}>Sort by:
        <select name="sortBy" value={this.state.sortOption}
                onChange={this.handleChange}>
          <option></option>
          <option value="mostRecent">Most recent</option>
          <option value="mostPopular">Most popular this month</option>
        </select>
      </div>
    );
  },

  _onChange () {
    this.setState(getSelectState());
  }

});

export default SortVideos;