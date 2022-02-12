import React, { useState } from 'react'
import datafile from './data.json'

class Convert extends React.Component {
    constructor(props) {
        super(props);
        this.datas = null;
        this.name = "TEST";
        this.state = {pays: '1',money: 0,year: 2010,yearf: 2021,sub : false,moneyf : 0,infla : 0};

        this.handleChangePays = this.handleChangePays.bind(this);
        this.handleChangeMoney = this.handleChangeMoney.bind(this);
        this.handleChangeYear = this.handleChangeYear.bind(this);
        this.handleChangeYearf = this.handleChangeYearf.bind(this);
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
    handleChangeYearf(event) {    
        this.setState({yearf: event.target.value});  
    }
    
    handleSubmit(event) {
        event.preventDefault();
        let somme = 0;
        let argent = this.state.money;
        let pays = this.datas[this.state.pays];
        for (let i = this.state.year;i < this.state.yearf; i++) {
            console.log(pays[i]);
            somme = somme + parseFloat(pays[i].replace(',','.')); 
            console.log('somme : '+somme);
        }
        argent = argent * (somme / 100 + 1);
        this.setState((state) => ({sub: true,moneyf: argent,infla: somme}));
        alert('Pays choisi : '+this.state.pays+' Argent mis : '+this.state.money+' Année : '+this.state.year);
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
            <input type="number" value={this.state.year} onChange={this.handleChangeYear} min="2010" max="2020" />        
            </label>
            <label>
                    Année sortie :
                    <input type="number" value={this.state.yearf} onChange={this.handleChangeYearf} min="2011" max="2022" />
            </label>
            <input type="submit" value="Submit" />
        </form>
        <div style={{ display: this.state.sub ? 'initial' : 'none'}}>
            <h2>2ème zone</h2>
            <span>Inflation cumulée : {this.state.infla} %</span>
            <span>Argent final : {this.state.moneyf} €</span>
        </div>
        </div>
    } 
}

export default Convert