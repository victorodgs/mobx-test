import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useStores } from "../use-stores";

export const TodoList = observer(() => {
  const { todoStore } = useStores();

  const refetchData = () => {
    todoStore.loadTodosList();
  };

  useEffect(() => {
    todoStore.loadTodosList();
  }, []);

  return (
    <div>
      <button onClick={refetchData}>Refresh Data</button> <br />
      Total: {todoStore.totalTodos} <br />
      Last Updated: {todoStore.lastUpdated} <br />
      Todos: <br />
      <ul>
        {todoStore.todos.map((t) => (
          <li>{t.title}</li>
        ))}
      </ul>
    </div>
  );
});
