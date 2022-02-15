import React, { useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import datafile from './data.json'

class Convert extends React.Component {
    constructor(props) {
        super(props);
        this.datas = null;
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
        this.setState({pays: event});
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
        <form className=" max-w-2xl mx-auto space-y-5" onSubmit={this.handleSubmit}>
            <div>
                <Listbox value={this.state.pays} onChange={this.handleChangePays}>
                    <Listbox.Label>Selection pays :</Listbox.Label>
                    <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-blue-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                    {this.datas[this.state.pays].TIME}
                    
                    </Listbox.Button>
                    <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                    >
                    <Listbox.Options className="z-20 absolute max-w-2xl w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {this.datas.map((data, i) =>
                        <Listbox.Option key={i} value={i} className={({ active }) =>
                        `${active ? 'text-sky-900 bg-sky-100' : 'text-gray-900'}
                            cursor-default relative py-2 pl-10 pr-4`
                    }> 
                    {data.TIME}
                    </Listbox.Option>)}
                    </Listbox.Options>
                    </Transition>
                </Listbox>
            </div>
            <div>
                <label>
                Argent:
                <input className="w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-blue-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"  type="number" value={this.state.money} onChange={this.handleChangeMoney} />        
                </label>
            </div>
            <div>
                <label>
                Année entrée :
                <input className="w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-blue-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm" type="number" value={this.state.year} onChange={this.handleChangeYear} min="2010" max="2020" />        
                </label>
            </div>
            <div>
                <label>
                        Année sortie :
                        <input className="w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-blue-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm" type="number" value={this.state.yearf} onChange={this.handleChangeYearf} min="2011" max="2022" />
                </label>
            </div>
            <input className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75" type="submit" value="Submit" />
        </form>
        <div style={{ display: this.state.sub ? 'initial' : 'none'}}>
            <h2>Résultat</h2>
            <span>Inflation cumulée : {this.state.infla} %</span>
            <span>Argent final : {this.state.moneyf} €</span>
        </div>
        </div>
    } 
}

export default Convert