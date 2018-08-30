import React, { Component } from 'react';
import gql from "graphql-tag";
import { graphql } from 'react-apollo';

const MainQuery = gql`
{
  pkg(id: 1) {
    main{
      name
      occupation
      description
      address{
        state
      }

    }
    
  }
}
`;



class Header extends Component {
  render() {
    var x = this.props.data.pkg;
    console.log(x)
    if (this.props.data.pkg) {
      var name = x.main.name;
      var occupation = x.main.occupation;
      var description = x.main.description;
      var state = x.main.address.state;
    }
    return (

      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul>

        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{name}.</h1>
            <h3>I'm an {state} based <span>{occupation}</span> {description}</h3>
            <hr />
           
      
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p>
      </header>
    );
  }
}


const HeaderwData = graphql(MainQuery)(Header);


export default HeaderwData;
