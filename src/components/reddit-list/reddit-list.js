import React from 'react';
import PropTypes from 'prop-types';

class SearchResultList extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  // }

    handleClick = () =>{
        if(!this.state.articles.imageUrl){
            return superagent.get(this.state.articles.url)
                .then(response =>{
                    this.state.handleForumChange({
                        ...this.state.articles,
                        imageUrl: response.body.imageUrl,
                        height: response.body.height,
                    });
                })
        }else {
            this.props.handleForumChange({
                ...this.state.articles,
                imageUrl: null,
                height:null,
            })
        }
    }
  render() {
    return (
      <li onClick={this.handleSubmit}>
          </br>
      <p> Author: {articles.data.author}</p>
        ? <div className='searchResults'>
                {
                this.state.articles.map((articles, index) => <div key = {index}>
                    <a href={articles.data.url}>{articles.data.name}
                    <p>{articles.data.ups}</p>
                    </a>
                    </div>)}
            </div>
        : <div className='empty'>
            Please specify what you want to see and the total amount
            </div>

    );
  }
}

SearchResultList.propTypes = {
  articles: PropTypes.object,
};

export default SearchResultList;
