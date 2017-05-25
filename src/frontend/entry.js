/**
 * Created by Jack on 3/31/2017.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './application'

import Relay, {QueryRenderer, graphql,} from 'react-relay';
import {Environment, Network}  from 'relay-runtime';

// Define a function that fetches the results of an operation (query/mutation/etc)
// and returns its results as a Promise:
function fetchQuery(operation,
                    variables,
                    cacheConfig,
                    uploadables,) {
    return fetch('/graphql', {
        method: 'POST',
        headers: {}, // Add authentication and other headers here
        body: JSON.stringify({
            query: operation.text, // GraphQL text from input
            variables,
        }),
    }).then(response => {
        return response.json();
    });
}

// Create a network layer from the fetch function
const network = Network.create(fetchQuery);

// Create an environment using this network:
const environment = new Environment({
    // other options
    network,
});


import ArticleList from './application/home/article/article-list'
const RelayArticle = Relay.createFragmentContainer(ArticleList,{
    fragments:{
        articles:()=> Relay.QL`
            fragment Article_Test on Article{
                title
            }
        `,
    }
});

// class RelayRoute export Relay.Route {
//     static queries = {
//         viewer: () => Relay.QL`
//             query {
//                 viewer
//             }
//         `,
//     };
// }

ReactDOM.render(
    <QueryRenderer
        environment={environment}
        query={Relay.QL`
    query {
      article(_id:$ID) {
        title
      }
    }
  `}
        variables={{
            ID: '592067cb58af1e1008200166',
        }}
        render={(error, props) => {
            if (error) {
                return <div>{error.message}</div>;
            } else if (props) {
                return <div>{props.article.title} is great!</div>;
            }
            return <div>Loading</div>;
        }}
    />,
    document.getElementById('app')
);