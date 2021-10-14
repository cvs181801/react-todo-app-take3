import React from 'react'


function Todoitem(props) {
    return (
        <div>
            <p>{props.id}</p>
            <p>{props.task}</p>
            <p>{props.requiresConcentration}</p>
            <p>{props.howOften}</p>
            <p>{props.affirmation}</p>
            
            <input 
            type="checkbox" 
            onChange={()=> props.handleChange(props.id)}></input>

            {props.completed === true ? <h2>Not yet completed</h2> : <h2>Complete!</h2>}
        </div>
    )
}

export default Todoitem