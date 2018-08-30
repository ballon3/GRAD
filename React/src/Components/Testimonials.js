import React, { Component } from 'react';
import gql from "graphql-tag";
import { graphql } from 'react-apollo';

const MainQuery = gql`
  {
    pkg(id: 1) {
      testimonials{
        text
        user
      }
    }
  }

`;





class Testimonials extends Component {
  render() {
    var x = this.props.data.pkg;
    console.log(x)

    if(this.props.data.pkg){
      var testimonials = x.testimonials.map(function(testimonial){
        return <li key={testimonial.user}>
           <blockquote>
              <p>{testimonial.text}
              </p>
              <cite>{testimonial.user}</cite>
           </blockquote>
        </li>
      });
    }
    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">
            <div className="two columns header-col">
               <h1><span>Client Testimonials</span></h1>
            </div>
            <div className="ten columns flex-container">
                  <ul className="slides">
                     {testimonials}
                  </ul>
            </div>
         </div>
       </div>
   </section>
    );
  }
}

const TestimonialswData = graphql(MainQuery)(Testimonials);


export default TestimonialswData;
