import React from "react"
import Todolist from "./components/Todolist"
import Todoitem from "./components/Todoitem"

/*         
        {Todolist.map(item => < Todoitem key={item.id} id={item.id} task={item.task} requiresConcentration={item.requiresConcentration} 
        howOften={item.howOften} affirmation={item.affirmation} completed={item.completed} handleChange={this.handleChange}/>)}
        */        

function App() {

  return (
    <div className="App">
        <h1>To Do's</h1>

  {Todolist.map(item => <Todoitem key={item.id} id={item.id} task={item.task} 
    requiresConcentration={item.requiresConcentration} howOften={item.howOften} affirmation={item.affirmation}/>)}
        
    </div>
  );
}

export default App;
