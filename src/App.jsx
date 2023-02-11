import React, { useState } from "react";

// components

import TodoForm from "./components/TodoForm/TodoForm";
import TodoItem from "./components/TodoItem/Todoitem";

// css

import "./App.css";

// function App() {
//   return (
//     <div>
//       <h1> My Todo List</h1>
//       <TodoItem todo="Finish plus project" />
//       <TodoItem todo="Feed cat" />
//       <TodoItem todo="Be awesome." />
//     </div>
//   )
// }

function App() {

// state
// is a way to hold onto value and it allows us to connect it to things such as function.
// any chnages to that state. will cause it to re-render anything related to that state
// props: we use this pass information from the parent to the child.
// state can hold more complex things such as arrays. see below we have a text and a boolean
 
//state
const [todos, setTodos] = useState([
    { text: "Learn about React", isCompleted: false, },
    { text: "meet friend for lunch", isCompleted: false, },
    { text: "Build this app", isCompleted: false, }
  ]);


  // actions
  const addTodo = (text) => {
    const newTodos = [...todos, { text: text, isCompleted: false }]; //we are adding an object to this action. the "...todos" makes a copy and expands it into the array
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos]; // whenever you take an array in jsx, we need to copy it to prevent rendering issues
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos]; // we are creating a copy of the state in this variable.
    // never mess with state directly. when you want to use it, create a COPY using ...abc
    //newTodo = todo (kinda replaces it). newTodo = ...todo (they are two SEPARATE states)
    newTodos.splice(index, 1); //splice removes elements from an array
    setTodos(newTodos);
  };

  return (
    <div className="app">
    <div className="todo-list">
    <h1>My todo list</h1>
    {todos.map((todo, index) => ( //loops over array, and renders a todo component in react and applies each value as a prop
      <TodoItem
      key={index} //reference value (an identifier)
      todo={todo}
      index={index} // where the item is in an array. 
      completeTodo={completeTodo} //we are passing that function to the todoitem. it is because the state is inside this app file. 
      removeTodo={removeTodo}
      />
    ))}
    <TodoForm addTodo={addTodo} />
    </div>
    </div>
  );
}

export default App;