import React from 'react'

function Todoitem(props) {

    console.log(props.completed)

const completedStyle = {
    textDecoration: "line-through"
}
    return (
        <div>
             <input type="checkbox" 
                //checked={props.completed}
                onChange={()=> props.handleChange(props.id)}></input>
            <p style={props.completed ? completedStyle : null}>{props.task}</p>
            <p>{props.requiresConcentration}</p>
            <p>{props.howOften}</p>
           
        </div>
    ) 
}

export default Todoitem

