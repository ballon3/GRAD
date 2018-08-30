import React, { Component } from 'react';
import gql from "graphql-tag";
import { graphql } from 'react-apollo';


const MainQuery = gql`
{
  resume(id: 2){
    education{
      school
      degree
      graduted
      description
    }
    works{
      company
      title
      years
      description      
    }
  } 
}
`;



class Resume extends Component {
  render() {
    var x = this.props.data.resume
    console.log(x)
    if(this.props.data.resume){
      var education = x.education.map(function(edu){
        return <div key={edu.school} className="row item">
           <div className="twelve columns">
              <h3>{edu.school}</h3>
              <p className="info">{edu.degree} <span>&bull;</span> <em className="date">{edu.graduated}</em></p>
              <p>
                {edu.description}
              </p>
           </div>
        </div>
      });

      var works = x.works.map(function(job){
        return <div key={job.company} className="row item">
           <div className="twelve columns">
              <h3>{job.company}</h3>
              <p className="info">{job.title}<span>&bull;</span> <em className="date">{job.years}</em></p>

              <p>
              {job.description}
              </p>
           </div>
        </div>
      });

    }
    return (
      <section id="resume">
      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            {education}
         </div>
      </div>

      <div className="row work">
         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {works}
         </div>
      </div>
      
      
      
   </section>
    );
  }
}

const ResumewData = graphql(MainQuery)(Resume);

export default ResumewData;
