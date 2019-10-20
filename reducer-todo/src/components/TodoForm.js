import React, { useState, useReducer } from "react";
// import { initialState, reducer } from "../reducers/reducer";

const TodoForm = () => {
  // created empty array to store created Objects from input.
  const [list, setList] = useState([]);
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
    setList([...list, input]);
    setInput({ task: "", id: Date.now(), completed: false });

  };

  const toggleComplete = (e, todoId) =>{

  }

  console.log("task", list);
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
