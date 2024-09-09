"use client";
import { useTodoStore } from "@/stores/useTodoStore";

const TodoList = () => {
  const { data, deleteTodo, deleteAll } = useTodoStore();

  return (
    <div>
      <h1>TodoList</h1>
      {data.map((el, index) => (
        <div key={index}>
          <h1>{el.title}</h1>
          <p>{el.description}</p>
          <button onClick={() => deleteTodo(el.id)}>delete</button>
        </div>
      ))}
      <button onClick={() => deleteAll}>deleteAll</button>
    </div>
  );
};

export default TodoList;
<h1>TodoList</h1>;
