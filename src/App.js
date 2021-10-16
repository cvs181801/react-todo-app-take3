import React from "react"
import Todolist from "./components/Todolist"
import Todoitem from "./components/Todoitem"
//import Testcomponent from "./components/Testcomponent"

class App extends React.Component {
constructor() {
  super()
  this.state = {
    todos: Todolist
  }
  this.handleChange = this.handleChange.bind(this)
  //this.testMethod = this.testMethod.bind(this)
}

handleChange(id) {
  this.setState(prevState => {
    const updatedTodos = prevState.todos.map(todo => {
      if (todo.id === id) {
        return todo.completed = !todo.completed;  
      } else {
        return todo;
      }
    })
    console.log(updatedTodos);
    return {
      todos: updatedTodos
    }
  })
}

// testMethod(id) {
//   const updatedTodos = Todolist.map(todo => {
//     if (todo.id === id) {
//       return todo.completed = !todo.completed;
//     } else {
//       return todo;
//     } 
//   })
//   console.log(updatedTodos)
// }

render() {
    return (
      <div className="App">
          <h1>To Do's</h1>    

    {Todolist.map(item => <Todoitem key={item.id} id={item.id} task={item.task} 
      requiresConcentration={item.requiresConcentration} howOften={item.howOften} affirmation={item.affirmation}
      completed={item.completed} handleChange={this.handleChange} />) }

{/* {Todolist.map(item => < Testcomponent key={item.id} id={item.id} task={item.task} 
      requiresConcentration={item.requiresConcentration} howOften={item.howOften} affirmation={item.affirmation}
      completed={item.completed} testMethod={this.testMethod} />) } */}

      </div>
    );
  }
}

export default App;
