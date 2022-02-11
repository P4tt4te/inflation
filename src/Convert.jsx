import React, { useState } from 'react'
import datafile from './data.json'

class Convert extends React.Component {
    constructor(props) {
        super(props);
        this.datas = null;
        this.name = "TEST";
        this.state = {pays: '1'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        try {
            this.datas = datafile;
            console.log(this.datas);
          } catch (e) {
            console.error("Parsing error:", e);
          }
    }

    componentDidMount() {
    
    }

    handleChange(event) {    
        this.setState({pays: event.target.value});  
    }
    
    handleSubmit(event) {
        alert('Pays choisi : '+this.state.pays);
        event.preventDefault();
    }

    
    render() {
        return <div>
        <h1>{this.name}</h1>
        <form onSubmit={this.handleSubmit}>
            <label>Selection pays :
                <select value={this.state.pays} onChange={this.handleChange}>
                    {this.datas.map((data, i) =>
                    <option value={i}>{data.TIME}</option>)}
                </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
        </div>
    } 
}

export default Convert