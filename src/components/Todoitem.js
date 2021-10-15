import React from 'react'

function Todoitem(props) {

    console.log(props.completed)

const completedStyle = {
    textDecoration: "line-through"
}
    return (
        <div>
             <input type="checkbox" 
                //checked={props.completed} This part was messing up the whole thing, I'm not sure why...
                onChange={()=> props.handleChange(props.id)}></input>
            <p style={props.completed ? completedStyle : null}>{props.task}</p>
            <p>{props.requiresConcentration}</p>
            <p>{props.howOften}</p>
           
        </div>
    ) 
}

export default Todoitem

