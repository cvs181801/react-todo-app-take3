import React from 'react'
//import './index.css'

function Todoitem(props) {

    console.log("complete? ", props.completed)

const completedStyle = {
    textDecoration: "line-through"
}
    return (
        <div className="todoitem"> 
            <div className="todoitem__checkbox">
                <input type="checkbox" 
                    
                    onChange={()=> props.handleChange(props.id)}></input>
                </div>   
            <p style={props.completed ? completedStyle : null}>{props.task}</p>         
        </div>
    ) 
}

export default Todoitem

