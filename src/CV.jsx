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
                <div className="item" id={'work-' + cvdata.id} key={cvdata.id}>
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
               <div className="item" id={'edu-' + cvdata.id} key={cvdata.id}>
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
            </React.Fragment>
        
          )
      }
    }


  
  export default CV