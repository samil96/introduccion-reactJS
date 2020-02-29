import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';

const App = () =>{
    //const [name, setName] = useState('Lesly')

    const [contador, setContador] = useState(0)

    const Sumar = () => {
        setContador(contador+1)
    }

    const Restar = () =>{
        setContador(contador-1)
    }

    return(
        <div className="App">
            <div className="App-header">
                <div className="App-logo">
                    <img src={logo}></img>
                    <div> {contador} </div>
                    <button onClick={Sumar}> Sumar
                    </button>
                    <button onClick={Restar}> Restar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App;