import React, {Component} from 'react'

class Bio extends Component {
    render(){
    return (
        <div className="media">
            
            <h5 className="mt-0" style={{color:"gray"}}>{this.props.FullName}</h5>
            <span style={{color:"gray"}} >AGE: </span> {this.props.Age} <br/>
            <span style={{color:"gray"}}>GENDER: </span>{this.props.Gender}<br/>
            <span style={{color:"gray"}}>INTERESTS: </span>{this.props.Interests}<br/>
            <span style={{color:"gray"}}>BIO: </span>{this.props.FullName} am {this.props.Age} years old, I like {this.props.Interests}
            
        </div>
    )
}}

export default Bio;
