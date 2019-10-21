import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducers/reducer";

const TodoForm = () => {
  // created empty array to store created Objects from input.
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState('');

  //setting input values for Form
  const handleChange = e => {
    setInput( e.target.value );
  };

  // Taking Input values and saving to task array
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({type: 'ADD_TASK', payload: input})
    // dispatch([...list, input]);
    // setInput('');

  };

  // const toggleComplete = (e, todoId) =>{

  // }

  console.log("task", state);
  // console.log("input", input);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={input}
          onChange={handleChange}
        />
      </form>
      <div>
        <button onClick={handleSubmit}>Add Todo</button>
        <button>Clear Completed</button>
      </div>
    </div>
  );
};

export default TodoForm;

// Commit Notes, for myself 


// originally had this in handleSubmit, this is why the second and all inputs after were not saving correctly.  
  // setInput({ task: ""})

//   replaced with Not it works
//   setInput({ task: "", id: Date.now(), completed: false });
