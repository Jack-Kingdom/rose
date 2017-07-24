/**
 * Created by Jack on 4/20/2017.
 */

import React from 'react';
import Sidebar from './sidebar'
import ArticleList from './article/articleList'

import {
    QueryRenderer,
    graphql,
} from 'react-relay';

import {
    Environment,
    Network,
    RecordSource,
    Store,
} from 'relay-runtime';

function fetchQuery(operation, variables,) {
    return fetch('/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    }).then(response => {
        return response.json();
    });
}

const modernEnvironment = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
});

class Home extends React.Component {
    render() {
        return (
            <ArticleList/>
        )
    }
}


// export default Home;

export default <QueryRenderer
    environment={modernEnvironment}
    query={graphql`
      query homeQuery {
        articles{
            ...articleList_viewer
        }
      }
    `}
    variables={{}}
    render={({error, props}) => {
        if(error) throw error;
        console.log(props);
        return <ArticleList viewer={props}/>
    }}/>
