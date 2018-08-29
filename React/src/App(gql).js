import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import {main,portfolio,resume,testimonials} from '../public/resumeData'
import { gql, graphql } from 'react-apollo'
import {
  ApolloProvider,
  ApolloClient,
  createBatchingNetworkInterface,
} from 'react-apollo'

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

const query = gql`{
  data(id: 1) {
    main {
      name
      occupation
      description
      image
      bio
      email
      phone
      address{
        city
        state
        street
      },
      
      
    },
    resume{
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
  constructor(props){
    super(props);

    this.state = {
      
      resumeData:{
        main: main,
        portfolio: portfolio,
        resume: resume,
        testimonials: testimonials
      }
    }
  }




  render() {
    console.log(main);
    return (

      <ApolloProvider client={client}>
        <Router>
        
          <div className="App">
            <Header data={main} />
            <About data={this.state.resumeData.main} />
            <Resume data={this.state.resumeData.resume} />
            <Portfolio data={this.state.resumeData.portfolio} />
            <Testimonials data={this.state.resumeData.testimonials} />
            <Contact data={this.state.resumeData.main} />
            <Footer />
          </div>
        

        </Router>
      </ApolloProvider>
    
    );
  }
}

export default App;
