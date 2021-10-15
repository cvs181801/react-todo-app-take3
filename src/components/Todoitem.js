import React from 'react'

function Todoitem(props) {

    console.log(props)

const completedStyle = {
    textDecoration: "line-through"
}
    return (
        <div>
            <p style={props.completed ? completedStyle : null}>{props.task}</p>
            <p>{props.requiresConcentration}</p>
            <p>{props.howOften}</p>
            <input type="checkbox" 
                   onChange={()=> props.handleChange(props.id)}></input>
        </div>
    ) 
}

export default Todoitem

