import React from 'react';
import PropTypes from 'prop-types';

class SearchResultList extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  // }
  render() {
    return (
        <li key={this.props.key}>
            <p>author:{this.props.articles.data.author}</p>
            <img className ="searchImages" src={this.props.articles.data.url} />
            <p> Ups: {this.props.articles.data.ups}</p>

            <a href ={`https://www.reddit.com${this.props.articles.data.permalink}`} target='_blank' rel='noopener noreferrer'>{this.props.articles.data.name}</a>
        </li>
    );
  }
}
SearchResultList.propTypes = {
  articles: PropTypes.object,
  data: PropTypes.object,
  permalink: PropTypes.object,
  name: PropTypes.object,
  key: PropTypes.object,

};

export default SearchResultList;
