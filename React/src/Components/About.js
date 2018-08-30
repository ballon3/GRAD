import React, { Component } from 'react';
require ('../../public/resumeData.json');
import gql from "graphql-tag";
import { graphql } from 'react-apollo';

const MainQuery = gql`
{
  pkg(id: 1) {
    main{
      name
      occupation
      bio
      phone
      email
      address{
        city
        state
        zipCode
        street
      }

    }
    
  }
}
`;



class About extends Component {
  render() {
    var x = this.props.data.pkg;
    console.log(x)
    if(this.props.data.pkg){
        var name = x.main.name;
        //var image = 'images/'+x.main.image;
        var bio = x.main.bio;
        var street = x.main.address.street;
        var city = x.main.address.city;
        var state = x.main.address.state;
        var zip = x.main.address.zip;
        var phone = x.main.phone;
        var email = x.main.email;
        //var resumeDownload = this.props.data.resumedownload;
    }
    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
         
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}
            </p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city}, {state} {zip}
                     </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               
            </div>
         </div>
      </div>
   </section>
    );
  }
}

const AboutwData = graphql(MainQuery)(About);

export default AboutwData;
