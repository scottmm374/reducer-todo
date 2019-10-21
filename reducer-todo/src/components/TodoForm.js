import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducers/reducer";
import { Container, Form, Input, Button } from "reactstrap";
import TaskList from "./TaskList";

const TodoForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  //setting input values for Form
  const handleChange = e => {
    setInput(e.target.value);
  };

  // Taking Input values and saving to task array
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TASK", payload: input });
    setInput("");
  };

  const toggleComplete = task => {
    dispatch({ type: "TOGGLE_COMPLETE", payload: task.id });
  };

  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  console.log("task", state);
  // console.log("input", input);
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="task" value={input} onChange={handleChange} />
      </Form>
      <Button outline color="info" onClick={handleSubmit}>
        Add Todo
      </Button>
      <Button outline color="danger" onClick={clearCompleted}>
        Clear Completed
      </Button>
      <div>
        <TaskList task={state} toggleComplete={toggleComplete} />
      </div>
    </Container>
  );
};

export default TodoForm;
