import React from 'react'
//import './index.css'

function Todoitem(props) {

    console.log("complete? ", props.completed)
const affirmationDiv = document.querySelector(".todoitem__affirm");

const completedStyle = {
    textDecoration: "line-through"
}

function celebrateComplete(complete, affirmation) {
    if (complete) {
        console.log(affirmation)
        return <p>{affirmation}</p>
    } //else {
        //affirmationDiv.classList.add("hidden");
    //}
}
    return (
        <div className="todoitem"> 
            <div className="todoitem__checkbox">
                <input type="checkbox" 
                    onChange={()=> props.handleChange(props.id)}></input>
                </div>   
            <p style={props.completed ? completedStyle : null}>{props.task}</p>     
            <div className="todoitem__affirm">{celebrateComplete(props.completed, props.affirmation)}{props.emoji}</div>    
        </div>
    ) 
}

export default Todoitem

