import React from "react"

const Hello = () => {
  return (

  <div className="allpage">
    <div className="ui container">
      <div className="btngroup">
        <a href="https://www.discogs.com/user/allezz/collection" ><button className="ui big button discogs"><i className="fas fa-record-vinyl"></i>  My Discogs</button></a>
        <a href="https://github.com/kermit-klein" ><button className="ui big github button github"><i className="github icon"></i>My Github</button></a>
        <a href="https://www.linkedin.com/in/alierbay/" ><button className="ui big linkedin button linkedin"><i className="linkedin icon"></i>My LinkedIn</button></a>
      </div>
    </div>
  </div>

  )
}


export default Hello