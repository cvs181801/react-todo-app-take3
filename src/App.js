import React from "react"
import Todolist from "./components/Todolist"
import Todoitem from "./components/Todoitem"

class App extends React.Component {
constructor() {
  super()
  this.state = {
    todos: Todolist
  }
  this.handleChange = this.handleChange.bind(this)
  
}

// handleChange(id) {
//   this.setState(prevState => {
//     const updatedTodos = prevState.todos.map(todo => {
//       if (todo.id === id) {
//           return {
//             ...todo,
//             completed: !todo.completed
//           }    
//         } else {
//           return todo;
//         }
//       })
//     console.log("prevState.todos: ", prevState.todos);  
//     console.log("updated todos: ", updatedTodos);
//     return {
//       todos: updatedTodos
//     }
//   })
// }

componentDidUpdate(prevState) {
  if(prevState.todos !== this.state.todos) {
      this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo => {
          if (todo.id === id) {
              return {
                ...todo,
                completed: !todo.completed
              }    
            } else {
              return todo;
            }
          })
        console.log("prevState.todos: ", prevState.todos);  
        console.log("updated todos: ", updatedTodos);
        return {
          todos: updatedTodos
        }
      })
    }
}  //I'm not sure how to call this method correctly using the prevProps, prevState, and snapshot parameters



render() {
    return (
      <div className="App">
          <h1>To Do's</h1>    

        {Todolist.map(item => <Todoitem key={item.id} id={item.id} task={item.task} 
          requiresConcentration={item.requiresConcentration} howOften={item.howOften} affirmation={item.affirmation}
          completed={item.completed} handleChange={this.handleChange} />) }
    </div>
    );
  }
}

export default App;
