import React from 'react';
import PropTypes from 'prop-types';


// const apiUrl = 'http://www.reddit.com/r/';

class RedditSearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.redditName = this.props.name || '';

    this.state.searchLimit = 10;
  };

  handleForumChange = event => {
      this.setState({ redditName: event.target.value});
  };

  handleSubmit = event => {
      event.preventDefault();
      this.props.loadResultList(this.state.redditName, this.state.searchLimit);
  };
  handleSearchLimit = event => {
      this.setState({searchLimit: event.target.value})
  };
  render() {
    return (
        <form onSubmit ={this.handleSubmit}>
          <input
                name ="redditName"
                value={this.state.redditName}
                onChange={this.handleForumChange}
                type="text" />
          <input
                name ="searchLimit"
                placeholder='How many results?'
                min='0'
                max='100'
                value={ this.state.searchLimit }
                onChange={ this.handleSearchLimit }
                required
                />
            <button type ="submit"> Search </button>
        </form>
    )
  }
}

RedditSearchForm.propTypes = {
    name: PropTypes.array,
};

export default RedditSearchForm;
