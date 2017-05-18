/**
 * Created by Jack on 4/4/2017.
 */

import React from 'react';

class ArticleItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.title || "Article's title here",
            content: props.content || "Article's content here",
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>{this.state.content}</p>
            </div>
        )
    }
}

export default ArticleItem;