import React, { Component } from "react"
import axios from "axios"
import CVcard from "./CVcard"

class CV extends Component {

   state = {
     cvData:[]
   }

   componentDidMount() {
    axios.get('./src/data/cvdata.json')
      .then(response => {
        this.setState({
          cvData: response.data
        })
      })
  }

      render() {

        const cvDatas = this.state.cvData
        console.log(cvDatas)
     
        let cvWorkList
        let cvEduList

        if (cvDatas.length>0) {
           cvWorkList = cvDatas.map(cvdata => {
             if (cvdata.name == "Work") {
               return (
                <div class="item" id={'work-' + cvdata.id} key={cvdata.id}>
                     <CVcard cvdata={cvdata}/>
                  </div>
               )
             }         
           })
        }
                
        if (cvDatas.length>0) {
          cvEduList = cvDatas.map(cvdata => {
            if(cvdata.name == "Education") {
              return (
               <div class="item" id={'edu-' + cvdata.id} key={cvdata.id}>
                 <CVcard cvdata={cvdata}/>
               </div>
              )
            }
          })
       }
          return (
            <React.Fragment>
            <div id="cv-container" className="ui main container">
                <h3 className="ui header workhead">Work Experience</h3>
                <div class="ui list">{cvWorkList}</div>
                <div className="ui section divider"></div>
                <h3 className="ui header eduhead">Education</h3>
                <div class="ui list">{cvEduList}</div>
            </div>

              <div className="ui container">
                <div className="btngroup">
                  <a href="https://www.discogs.com/user/allezz/collection" ><button className="ui big button discogs"><i className="fas fa-record-vinyl"></i>  My Discogs</button></a>
                  <a href="https://github.com/kermit-klein" ><button className="ui big github button github"><i className="github icon"></i>My Github</button></a>
                  <a href="https://www.linkedin.com/in/alierbay/" ><button className="ui big linkedin button linkedin"><i className="linkedin icon"></i>My LinkedIn</button></a>
                </div>
              </div>
            </React.Fragment>
        
          )
      }
    }


  
  export default CV