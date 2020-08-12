import React, { useReducer, useRef } from "react";
import todoReducer from "./todoReducer";

const Todo = () => {
  // Step 1: useReducer returns state and dispatch just like redux does
  // we mapStateToProps and also mapDispatchToProps in redux.
  // the same is here in redux
  const [state, dispatch] = useReducer( todoReducer, []); // second arg is initial state

  // Another Hook is useRef - let's setup ref for the input fields
  const inputEl = useRef(null); // null will be the value of inputEl.current.value 

  let todoList = null;
  todoList = state.map( (todo, index) => {
    return(
      <li className="list-group-item" key={index}>
        {todo.text}
        <button type="button" 
        className="btn btn-danger btn-sm">Delete</button>
      </li>
    )
  })

  return(
    <div className='container text-left'>
      <hr />
      <h2>Todo App | using useReducer </h2>
      <input type='text' 
      className='form-control' ref={inputEl} />
      <button type='button' className='btn btn-primary'
        onClick={ () => dispatch({type: 'ADD_TODO', data: inputEl.current.value}) }>Add Todo</button>
      <hr/>
      <ul className="list-group list-group-flush">
        { todoList }
      </ul>
    </div>
  )

}

export default Todo; 