import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
//import {main,portfolio,resume,testimonials} from '../public/resumeData'
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: "http://localhost:8000/graphiql"
});

class App extends Component {

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Header />
          <About  />
          <Resume />
          <Portfolio />
          <Testimonials />
          <Contact  />
          <Footer />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
