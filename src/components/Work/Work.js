import React, { Component } from 'react';
import { WorkSection, Title,Span,Icon, WorkTitle, WorkPart, Line, PartDesc}  from './style.js';
import axios from 'axios' ;



class  Work  extends Component {
state = {
    works :  []
}

componentDidMount () {  /*fonction pour ammener les donner json*/


axios.get('/js/data.json').then( res => {this.setState({works: res.data.works})}); /*importer les donner json*/

}

render(){

    const {works} = this.state;
    
    const worksList = works.map( (workItem)=> {  /*mttre tt les donnes dans worksList*/ 
                                                  /*un par un par le map()*/
     return (
        < WorkPart first= {workItem.id}  key= {workItem.id}>
        <Icon className={workItem.icon_name}></Icon>
                <WorkTitle>{workItem.title}</WorkTitle>
                <Line/>
                <PartDesc>
                  {workItem.body}
              </PartDesc>
        </ WorkPart>

     )


    })
     

    return (
        <WorkSection>
        <div className="container">
            <Title><Span>My</Span> Work</Title>
           {worksList}
        </div>
    </WorkSection>
    )
}
}
export default Work
