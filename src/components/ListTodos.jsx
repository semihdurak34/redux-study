import React from "react";
import SingleTodo from "./SingleTodo";
import { useSelector } from "react-redux";

const ListTodos = () => {
  const { todosState } = useSelector((state) => state);

  return (
    <div>
      {todosState.todos.length === 0 ? (
        <p>Henüz bir veri yok</p>
      ) : (
        <>
          {todosState.todos.map((todo) => (
            <SingleTodo todo={todo} key={todo.id} />
          ))}
        </>
      )}
    </div>
  );
};

export default ListTodos;
