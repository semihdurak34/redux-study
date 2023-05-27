import React from "react";
import { useDispatch } from "react-redux";

const SingleTodo = ({ todo }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch({ type: "DELETE_TODO", payload: todo.id });
  };
  const handleIsDone = () => {
    dispatch({ type: "EDIT_ISDONE", payload: todo.id });
  };
  return (
    <div>
      <h2
        style={{
          textDecoration: todo.isDone === true ? "line-through" : "none",
          color: todo.isDone === true ? "red" : "black",
        }}
      >
        {todo.text}
      </h2>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleIsDone}>
        {todo.isDone === true ? "Yapılmadı" : "Yapıldı"}
      </button>
      <hr />
    </div>
  );
};

export default SingleTodo;
