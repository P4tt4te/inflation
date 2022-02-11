import React, { useState } from 'react'
import datafile from './data.json'

class Convert extends React.Component {
    constructor(props) {
        super(props);
        this.data = null;
        this.name = "TEST"
    }

    componentDidMount() {
        try {
            this.data = datafile;
            console.log(this.data);
          } catch (e) {
            console.error("Parsing error:", e);
          }
             
    }    

    
    render() {
        return <h1>{this.name}</h1>
    } 
}

export default Convert