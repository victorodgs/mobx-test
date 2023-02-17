import * as React from "react";
import { render } from "react-dom";
import { TodoList } from "./components/TodosList";

function App() {
  return <TodoList />;
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
