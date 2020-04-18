import React, { Component } from "react"
import axios from "axios"
import CVcard from "./CVcard"
import { UndrawGraduation } from "react-undraw-illustrations"
import { UndrawWorkTime } from "react-undraw-illustrations"

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
        let cvWorkList = []
        let cvEduList = []

        for (let i=0;i<cvDatas.length-1;i++) {
             if (cvDatas[i].name=="Work") {
               cvWorkList.push(<div className="item" id={'work-' + cvDatas[i].id} key={cvDatas[i].id}>
                                  <CVcard cvdata={cvDatas[i]}/>
                                </div>
                              )
             } else {

              cvEduList.push(<div className="item" id={'edu-' + cvDatas[i].id} key={cvDatas[i].id}>
                                  <CVcard cvdata={cvDatas[i]}/>
                              </div>
                            )
             }
        }

       
          return (
            <React.Fragment>
              <div id="cvhat">     
                <UndrawGraduation primaryColor='#172947' height='200px' />
             </div> 
             <div id="cvwork">     
                <UndrawWorkTime primaryColor='#855B06' height='200px' />
             </div> 
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