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

// Render this somewhere with React:
let Test = <QueryRenderer
    environment={environment}
    query={graphql`
query articles{
            id
            title
        }

  `}
    variables={{}}
    render={({error, props}) => {
        if (error) {
            return <div>{error.message}</div>;
        } else if (props) {
            return <div>{props.page.name} is great!</div>;
        }
        return <div>Loading</div>;
    }}
/>;

ReactDOM.render(
    <Test/>,
    document.getElementById('app')
);