/**
 * Created by Jack on 4/4/2017.
 */

import React from 'react';
import Relay, {QueryRenderer, graphql, createFragmentContainer} from 'react-relay';
import ArticleItem from './article-item'

class ArticleList extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     articles: props.data
        // };
        this.articles = props.data;
    }

    render() {
        console.log(this.articles);
        return (
            <div>
                <ArticleItem/>
                <ArticleItem/>
                <ArticleItem/>
            </div>
        )
    }
}


export default createFragmentContainer(ArticleList, graphql`
    fragment articleList_lst on Article{
        id
        title
        slug
    }
`)

