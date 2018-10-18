import "@babel/polyfill";
import React from 'react';
import superagent from 'superagent';
import Header from '../header/header';
import RedditSearchForm from '../reddit-form/reddit-form';
import RedditList from '../reddit-list/reddit-list';


class App extends React.Component {
    constructor(props) {
        super(props); // Initialize everything on React's side of the component

        this.state = {};
        this.state.articles = [];

    }

    // async componentDidMount() {
    //     await this.loadResultList();
    //
    //     console.log('Reddit list loaded!');
    // }

    loadResultList = async (redditName, searchLimit) => {
        const REDDIT_API = `https://www.reddit.com/r/${redditName}.json?limit=${searchLimit}`;
        return superagent.get(REDDIT_API)
            .then(response => {
                if (response.body.data) {
                    this.setState({articles: response.body.data.children});
                }
            })
            .catch(console.error);
    };

    render() {
        return (
            <main>
                <Header/>
                <RedditSearchForm
                    loadResultList={this.loadResultList}
                />
                <ul>
                    {
                    this.state.articles.map((currentArticle, index) => {
                        if(currentArticle) {
                            return <RedditList
                                articles = {currentArticle}
                                key = {index}
                            />
                        }
                    })
                }

                </ul>
            </main>
        );
    }
}

export default App;

