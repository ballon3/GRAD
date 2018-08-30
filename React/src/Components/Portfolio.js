import React, { Component } from 'react';
import gql from "graphql-tag";
import { graphql } from 'react-apollo';


const MainQuery = gql`
  {
    pkg(id: 1) {
      portfolio{
        title
        description
        category
        tags
        url
        modal

      }
      
    }
  }
`;



class Portfolio extends Component {
  render() {
    var x = this.props.data.pkg;
    console.log(x)

    if(this.props.data.pkg){
      var portfolios = x.portfolio.map(function(portfolio){        
        return <div key={portfolio.title} className="columns portfolio-item">
           <div className="item-wrap">
              <a href={portfolio.modal} title="">
              <h5>{portfolio.title}</h5>
              <p>{portfolio.category}</p>
                 <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>{portfolio.title}</h5>
                       <p>{portfolio.category}</p>
                </div>
                 </div>
                 
              </a>

           </div>
       </div>
      });
    }
    return (
      <section id="portfolio">
      <div className="row">
         <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          	   {portfolios}
            </div>
         </div>
      </div>
   </section>
    );
  }
}


const PortfoliowData = graphql(MainQuery)(Portfolio);

export default PortfoliowData;
