import React from "react";
import "./TodoItem.css";


//i am unsure what is happening here...
function TodoItem(props) {
    const { todo, index, completeTodo, removeTodo } = props;
    //in our function TodoItem, we pass a variable called props. our props are the "todo"
   
   
    return (
    <div className={`todo ${todo.isCompleted ? "complete" : ""}`}>
{/* if to do is complete, return "complete. else, just return the todo". this is the div name which prompts the complete class in css */}
        {todo.text}
    <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
    </div>
    </div>//this is telling us that we are returning this in our function
)};


export default TodoItem;