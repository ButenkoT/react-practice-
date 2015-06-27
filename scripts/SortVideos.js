const React = require('react');
const VideoStore = require('./VideoStore');
const AppActions = require('./actions/AppActions');

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
      <div className="sorting">Sort by:
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