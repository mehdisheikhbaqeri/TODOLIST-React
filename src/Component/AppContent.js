import React from "react";
import { useSelector } from "react-redux";

function AppContent() {
  const todoList = useSelector((state) => state.todo.todoList);
  console.log(todoList);
  return <div>This Is App Content</div>;
}

export default AppContent;
