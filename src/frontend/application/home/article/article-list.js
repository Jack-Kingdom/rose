/**
 * Created by Jack on 4/4/2017.
 */

import React from 'react';
import Relay,{DefaultNetworkLayer,Route} from 'react-relay';
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

let ArticleListRelayContainer =  Relay.createContainer(ArticleList,{
    fragments:{
        articles:()=> Relay.QL`
            fragment on Articles {
                title
                content
            }
        `
    }
});

class HelloRoute extends Relay.Route {
    static routeName = 'Hello';  // A unique name
    static queries = {
        // Here, we compose your Relay container's
        // 'greetings' fragment into the 'greetings'
        // field at the root of the GraphQL schema.
        greetings: (Component) => Relay.QL`
            query GreetingsQuery {
                Articles {
                    ${Component.getFragment('greetings')},
                },
            }
        `,
    };
}

export default <Relay.RootContainer
    Component={ArticleListRelayContainer}
    route={new HelloRoute()}
/>;