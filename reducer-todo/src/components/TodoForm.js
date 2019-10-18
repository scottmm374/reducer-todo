import React, { useState, useReducer } from "react";
// import { initialState, reducer } from "../reducers/reducer";

const TodoForm = () => {
  // created empty array to store created Objects from input.
  const [task, setTask] = useState([]);
  const [input, setInput] = useState({
    task: "",
    id: Date.now(),
    completed: false
  });

  //setting input values for Form
  const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // Taking Input values and saving to task array
  const handleSubmit = e => {
    e.preventDefault();
    setTask([...task, input]);
    setInput({ task: "", id: Date.now(), completed: false });

    // Below throws this error-- A component is changing a controlled input of type text to be uncontrolled. Input elements should not switch from controlled to uncontrolled (or vice versa).
    //    Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components
    //   setInput('')
  };

  console.log("task", task);
  console.log("input", input);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={input.task}
          onChange={handleChange}
        />
      </form>
      <div>
          {/* Had to add onClick with handle submit to get button to work? */}
          {/* {So far button does not work without an Onclick, type="submit" also does not work} */}
        <button>Add Todo</button>
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
