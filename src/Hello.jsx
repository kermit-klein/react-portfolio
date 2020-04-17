import React from "react"

const Hello = () => {
  return (
    <React.Fragment>
  <div className="allpage">
    <div className="ui container">
      <div className="btngroup">
        <a href="https://www.discogs.com/user/allezz/collection" ><button className="ui big button discogs"><i className="fas fa-record-vinyl"></i> My Discogs</button></a>
        <a href="https://github.com/kermit-klein" ><button className="ui big github button github"><i className="github icon"></i>Github</button></a>
      </div>
    </div>
  </div>
    </React.Fragment>
  )
}


export default Hello