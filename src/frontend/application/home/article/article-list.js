/**
 * Created by Jack on 4/4/2017.
 */

import React from 'react';
import Relay, {QueryRenderer, graphql,} from 'react-relay';
import ArticleItem from './article-item'

class ArticleList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: props.articles
        }
    }

    render() {
        return (
            <div>
                <ArticleItem/>
                <ArticleItem/>
                <ArticleItem/>
            </div>
        )
    }
}


export default ArticleList;