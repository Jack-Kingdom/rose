/**
 * Created by Jack on 3/31/2017.
 */

"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import App from './application';

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


ReactDOM.render(
    <QueryRenderer
        environment={modernEnvironment}
        query={graphql`
      query entryQuery {
        articles{
            id
            title
            slug
        }
      }
    `}
        variables={{}}
        render={({error, props}) => <App/>}
    />,
    document.getElementById('app')
);