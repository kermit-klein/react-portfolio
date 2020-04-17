import React from "react"
import { UndrawArtificialIntelligence } from "react-undraw-illustrations"

const About = () => {


  return (
    <React.Fragment>

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
    <div className="ui container">
        <div className="btngroup">
          <a href="https://www.discogs.com/user/allezz/collection" ><button className="ui big button discogs"><i className="fas fa-record-vinyl"></i> My Discogs</button></a>
          <a href="https://github.com/kermit-klein" ><button className="ui big github button github"><i className="github icon"></i>My Github</button></a>
          <a href="https://www.linkedin.com/in/alierbay/" ><button className="ui big linkedin button linkedin"><i className="linkedin icon"></i>My LinkedIn</button></a>
        </div>
    </div>
  </div>
  </React.Fragment>
  );
};

const divStyle = {
  marginTop:150
}


export default About;