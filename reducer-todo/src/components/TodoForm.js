import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducers/reducer";

const TodoForm = () => {
  //   const [completed, setCompleted] = useState(false);
  const [values, setValues] = useState({
    task: ""
  });
  

  const handleChange = e => {
    // sets value, if setTodo commented out in handleSubmit. Otherwise it clears the value before submit.
    setValues({...values, [e.target.name]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    setValues({ task: "" });
  };

  console.log("task", values);
//   console.log("todo", todo);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="item"
          value={values.task}
          onChange={handleChange}
        />
      </form>
      <div>
        <button type="submit">Add Todo</button>
        <button>Clear Completed</button>
      </div>
    </div>
  );
};

export default TodoForm;
