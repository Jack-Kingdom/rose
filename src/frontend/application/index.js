/**
 * Created by Jack on 4/1/2017.
 */

import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Home from './home'
import Admin from './admin'

// class App extends React.Component {
//
//     constructor(props) {
//         super(props);
//
//         this.status = {
//         }
//     }
//
//     render() {
//
//         return (
//             <BrowserRouter>
//                 <div className="site-wrapper">
//                     <Route exact path="/" component={ Home }/>
//                     <Route exact path="/admin" component={ Admin }/>
//                 </div>
//             </BrowserRouter>
//         );
//     }
// }

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
        headers: {
            'content-type': 'application/json'
        }, // Add authentication and other headers here
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



export default <QueryRenderer
    environment={environment}
    query={graphql`
    query {
        articles{
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
/>;