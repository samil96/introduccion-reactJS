import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';
import Contador from './components/Contador'

const App = () =>{
    //const [name, setName] = useState('Lesly')
    const name = 'Lesly'
    const lasteName = 'Samaritano'
    return(
        <div className="App">
            <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"></img>  
                    <Contador nameA={name} 
                    lasteNameA={lasteName}/>
                
            </div>
        </div>
    )
}

export default App;