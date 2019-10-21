import React from "react";
import { Container } from "reactstrap";
import "./App.css";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <Container className="App">
      <h1>Todo-Reducers</h1>
      <TodoForm />
    </Container>
  );
}

export default App;
