import React from "react"

const CVcard = ({ cvdata }) => {
    return (
      <>
           
        <div className="header">{cvdata.title}
            <span className="place">{cvdata.place}</span>
        </div>
        <div className="company">
            {cvdata.company}<span className="year">{cvdata.year}</span>
        </div>  
        <p className="description">{cvdata.description}</p>
           
      </>
    )
  }

  
  export default CVcard;