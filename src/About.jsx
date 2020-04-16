import React from "react";
import { UndrawArtificialIntelligence } from "react-undraw-illustrations";

const About = () => {


  return (
  
    <div className="ui main container" style = {divStyle}>
    <div className="ui stackable two column grid">
      <div className="column">
        <UndrawArtificialIntelligence primaryColor='#855B06' height='200px' />
      </div>
      <div className="column">
        <h1 className="ui header" id="about-header">About Me</h1>
        <p className="textstyle1">
          Born in Ankara.. Grew up in Istanbul.. Moved to Stockholm.. 
          I'm very interested in Web Developing and I have decided to do something about it.
          <br />Learn it! <br/>
          I have electrical engineering background and lots of CRM experience now I want to invest my time
          to learn software.
          My goal is learning Ruby on Rails and React in and out with Test Driven Development techniques.
        </p>
      </div>
    </div>
  </div>
  );
};

const divStyle = {
  marginTop:150
}


export default About;