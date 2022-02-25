import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Todos(props) {
  console.log(typeof props.id);

  const styles = {
    background: !props.isComplete ? "rgb(233, 110, 110)" : "rgb(110, 233, 116)",
  };
  return (
    <div
      className="todo-item"
      style={styles}
      onDoubleClick={() => props.handleToggle(props.id)}
      draggable={true}
      onDragStart={props.handleDrag}
      id={props.id}
      onDragOver={(ev) => ev.preventDefault()}
      onDrop={props.handleDrop}
    >
      <h3 className="todo-task" id={props.id}>
        {props.task}
      </h3>
      <h4 className="todo-date" id={props.id}>
        {props.date}
      </h4>
      <FontAwesomeIcon
        icon={faTrash}
        className="trash-icon"
        onClick={() => props.deleteTodo(props.id)}
        id={props.id}
      />
    </div>
  );
}
