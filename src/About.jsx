import React from "react"
import { UndrawArtificialIntelligence,UndrawStaticAssets
} from "react-undraw-illustrations"


const About = () => {


  return (
    <React.Fragment>

    <div className="ui main container" style = {divStyle}>
    <div className="ui stackable three column grid">
    <div className="row">
      <div className="four wide column">
        <UndrawStaticAssets primaryColor='#855B06' height='200px' />
      </div>
      <div className=" ten wide column">
        <h1 className="ui header" id="about-header">About Me</h1>
        <p className="textstyle1">
          Born in Ankara.. Grew up in Istanbul.. Moved to Stockholm.. 
          I'm very interested in Web Developing and I have decided to do something about it.
          <br />Learn it! <br/>
          I have electrical engineering background and lots of CRM experience now I'm investing my time
          to learn software.
          My goal is learning Ruby on Rails and React in and out with Test Driven Development techniques.
        </p>
      </div>
      </div>

<div className="row" ref={(el)=>{if(el){el.style.setProperty("margin-top","70px","important")}}}>
      <div className=" ten wide column">
        <h1 className="ui header" id="about-header">Interests</h1>
        <div className="ui bulleted list textstyle1">
          <div className="item">Collecting brand new and second hand vinyls. I'm at the beginning of my collection but I have already
          accumulated more than 100 records. I'd like to visit local record shops whenever I visit new cities. Check my collection on
          <a href="https://www.discogs.com/user/allezz/collection"> Discogs</a>.
          </div>
          <div className="item">I listen to music a lot so I'd like to keep my listening statistics at hand. Visit my <a href="https://www.last.fm/user/allezz">Last.fm</a>  account to see my music taste.
          </div>
          <div className="item">I like natural sciences, especially geography. I'm taking distance courses from Stockholm University <a href="https://www.su.se/geo/english/education/courses/bsc-distance-courses">Department of Geological Sciences</a>. I have a collection of mineral and rocks.
          </div>
          <div className="item">I like <a href="https://en.wikipedia.org/wiki/Agatha_Christie">Agatha Christie</a>  detective novels a lot. I have a collection of more than 30 books in Turkish accumulated over a time span of 20 years. I still have to collect around 30 more books to have complete collection.
          </div>
        </div>     
      </div>
      <div className=" four wide column">
        <UndrawArtificialIntelligence primaryColor='#855B06' height='300px' />
      </div>
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
  marginTop:120
}




export default About;