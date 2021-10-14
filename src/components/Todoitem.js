import React from 'react'

function Todoitem(props) {

function handleChange() {
        console.log("complete")
    return <p>{props.affirmation}</p>
}


    return (
        <div>
            <p>{props.task}</p>
            <p>{props.requiresConcentration}</p>
            <p>{props.howOften}</p>
            <input type="checkbox" 
            onChange={handleChange}></input>
        </div>
    ) 

}


export default Todoitem

