import React, { useState } from 'react'

const Pokemon = () =>{
    const [value, setValue] = useState('')
    const [pokemon, setPokemon]= useState('')
    const [pokemonImg, setPokemonImg]= useState('')

    const changeValue = (e) =>{
        setValue(e.target.value)
    }
    const agregarPokemon = (event) => {
        event.preventDefault()
        setPokemon(value)
        
        const url = `https://pokeapi.co/api/v2/pokemon/${value}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setPokemonImg(data.sprites.front_default)
        })
        setValue('')
    }

    return(
        <div className="App">
            <header className="App-header">
            <form className="App" onSubmit={agregarPokemon}>
               <input value={value} onChange={changeValue} />
               <button>Añadir</button>
            </form>
                <img src={pokemonImg} alt={pokemonImg} width={300}></img>
                <h1> {pokemon} </h1>
            </header>
        </div>
    )

}

export default Pokemon;