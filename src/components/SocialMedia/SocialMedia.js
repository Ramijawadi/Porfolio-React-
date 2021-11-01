import React, { Component } from 'react'
import {SMedia , Social ,Icon , Decs, SpanInfo1, SpanInfo2 }  from  './style.js'
import axios from 'axios';


class  SocialMedia extends Component {

state = {
social :[]

}


componentDidMount ()  {

axios.get('js/data.json')
.then (res => {this.setState ({ social :  res.data.social})

})}





    render(){

const {social} = this.state ;

const socialList = social.map( (socialItem) =>  {

return (
    <Social item={socialItem.id} key={socialItem.id} >
            <Icon  className={socialItem.icon}></Icon>
            <Decs>
                < SpanInfo1>{socialItem.title}</ SpanInfo1>
                <SpanInfo2 >{socialItem.body}</SpanInfo2>
            </Decs>
   </Social>        

)

})


    return (
        <SMedia>
            
        
  {socialList}       
        
     
    </SMedia>
    )
    }
    }
export default SocialMedia
