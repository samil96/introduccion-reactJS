import React, { useState } from 'react';

const Contador = (props) =>{
    const [contador, setContador] = useState(0)
    const  {nameA, lasteNameA} = props

    const sumar =() =>{
        setContador(contador+1)
    }

    return(
        <div>
            {lasteNameA, nameA}
            <div> {contador} </div>
            <button onClick={sumar}> Sumar</button>
        </div>
    
    )
}

export default Contador;