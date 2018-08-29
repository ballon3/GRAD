import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Resume from './Components/Resume';
import Footer from './Components/Footer';

import { gql, graphql } from 'react-apollo';
import {
  ApolloProvider,
  ApolloClient,
  createBatchingNetworkInterface,
} from 'react-apollo';

const networkInterface = createBatchingNetworkInterface({
  uri: 'http://localhost:8000/gql',
  batchInterval: 10,
  opts: {
    credentials: 'same-origin',
  },
})

const client = new ApolloClient ({
  networkInterface: networkInterface,
})

const query = gql`
query {
  pkg(id: 1) {
    main {
      name
      occupation
      description
      image
      bio
      email
      phone
      address {
        city
        state
        street
      },
      
      
    },
    resume {
      education {
        school
        degree
        graduted
        description
      },
      works {
        company
        title
        years
        description
      },
      
    },
    portfolio {
      title
      description
      category
      tags
      image
      url
    },
    testimonials {
      text
      user
    }
  }
}`

class App extends Component {

  render() {
    let {data} = this.props
    if (data.loading) { return <div>Loading..</div> }
    
    return (

      <ApolloProvider client={client}>
        
          <div className="App">
            <Header data={data.pkg.main} />
            <Resume data={data.pkg.resume} />
            
            <Footer />
          </div>
        

        
      </ApolloProvider>
    
    );
  }
}

const queryOptions = {
  options: props => ({
    variables: {
      id: props.match.params.id,
    },
  }),
}

App = graphql(query, queryOptions)(App)
export default App;
