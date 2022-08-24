import { format } from "date-fns";
import React from "react";

import styles from "../Styles/modules/todoItem.module.scss";
import { getClasses } from "../utils/getClasses";
import { MdDelete, MdEdit } from "react-icons/md";

function TodoItem({ todo }) {
  const handelDelete = () => {
    console.log("deleting");
  };
  const handelUpdate = () => {
    console.log("editing");
  };
  return (
    <div className={styles.item}>
      <div className={styles.todoDetails}>
        [()]
        <div className={styles.texts}>
          <p
            className={getClasses([
              styles.todoText,
              todo.status === "Complete" && styles["todoText--complete"],
            ])}
          >
            {todo.title}
          </p>
          <p className={styles.time}>
            {format(new Date(todo.time), "p,MM/dd/yyyy")}
          </p>
        </div>
      </div>
      <div className={styles.todoActions}>
        <div
          className={styles.icon}
          onClick={handelDelete}
          onKeyDown={handelDelete}
          role="button"
          tabIndex={0}
        >
          <MdDelete />
        </div>
        <div
          className={styles.icon}
          onClick={handelUpdate}
          onKeyDown={handelUpdate}
          role="button"
          tabIndex={0}
        >
          <MdEdit />
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
