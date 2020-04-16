import React from "react";

const CV = () => {
    return (
      <React.Fragment>
          
          <img style={underCons} src="https://lh3.googleusercontent.com/proxy/ru0JQZHE98x_u6UJeZ2KOrVY3tRtZvMGQWg0SankUNBKVBm_o3jhk5olFT-XI4p3RvtZLMJRiloM-ZHNnVHNMpaC8w"/>
          
      <div className="ui container">
       
        <div className="btngroup">
        <a href="https://www.discogs.com/user/allezz/collection" ><button className="ui big button discogs"><i className="fas fa-record-vinyl"></i> My Discogs</button></a>
          <a href="https://github.com/kermit-klein" ><button className="ui big github button github"><i className="github icon"></i>Github</button></a>
        </div>
      </div>
      </React.Fragment>
    )
  };

  const underCons = {
    "margin": "200px 700px"
  }
  
  export default CV;