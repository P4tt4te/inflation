import React, { useState } from 'react'
import datafile from './data.json'

class Convert extends React.Component {
    constructor(props) {
        super(props);
        this.datas = null;
        this.name = "TEST";
        this.state = {pays: '1',money: 0,year: 2010};

        this.handleChangePays = this.handleChangePays.bind(this);
        this.handleChangeMoney = this.handleChangeMoney.bind(this);
        this.handleChangeYear = this.handleChangeYear.bind(this);
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

    handleChangePays(event) {    
        this.setState({pays: event.target.value});  
    }
    handleChangeMoney(event) {    
        this.setState({money: event.target.value});  
    }
    handleChangeYear(event) {    
        this.setState({year: event.target.value});  
    }
    
    handleSubmit(event) {
        alert('Pays choisi : '+this.state.pays+' Argent mis : '+this.state.money+' Année : '+this.state.year);
        event.preventDefault();
    }

    
    render() {
        return <div>
        <h1>{this.name}</h1>
        <form onSubmit={this.handleSubmit}>
            <label>Selection pays :
                <select value={this.state.pays} onChange={this.handleChangePays}>
                    {this.datas.map((data, i) =>
                    <option value={i}>{data.TIME}</option>)}
                </select>
            </label>
            <label>
            Argent:
            <input type="number" value={this.state.money} onChange={this.handleChangeMoney} />        
            </label>
            <label>
            Année:
            <input type="number" value={this.state.year} onChange={this.handleChangeYear} min="2010" max="2021" />        
            </label>
            <input type="submit" value="Submit" />
        </form>
        </div>
    } 
}

export default Convert