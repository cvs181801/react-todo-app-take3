import React from 'react'

export default function Testcomponent(props) {
    console.log(props.completed)
    const completedStyle = {
        textDecoration: "line-through"
    }
    return (
        <div>
            <p onClick={()=> props.testMethod(props.id)} style={props.completed ? completedStyle : null}> {props.task}</p>
        </div>
    )
}
