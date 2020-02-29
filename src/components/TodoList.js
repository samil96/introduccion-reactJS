import React, { useState } from 'react'

const TodoList = () =>{
    const [item, setItem]= useState('')
    const [list, setList]= useState([])
    const agregarItem = (event) => {
        setList([list, event.target.value])
        setItem('')
    }

    return(
        <div>
            <h1>TODO LIST APP</h1>
            <br/>
            <input value={item} placeholder="escribeme"  
            onChange={
                agregarItem}
            />
            <h2> {list} </h2>

        </div>
    )

}

export default TodoList;