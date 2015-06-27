const React = require('react');


const SortVideos = React.createClass({

  getInitialState () {
    return {selectValue: 'mRecent'};
  },

  handleChange (e) {
    this.setState({selectValue: e.target.value});
  },

  render() {

    console.log('You selected ' + this.state.selectValue);

    return (
      <div className="sorting">Sort by:
        <select name="sortBy" value={this.state.selectValue}
                onChange={this.handleChange}>
          <option value="mRecent">Most recent</option>
          <option value="mPopular">Most popular this month</option>
        </select>
      </div>
    );
  }

});

export default SortVideos;