import React, { useState, useEffect } from "react";

import toast from "react-hot-toast";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../slices/todoSlice";
import styles from "../Styles/modules/modal.module.scss";
import Button from "./Button";
import { v4 as uuid } from "uuid";

function TodoModal({ type, modalOpen, setModalOpen, todo }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Incomplete");
  const dispatch = useDispatch(addTodo);

  useEffect(() => {
    if (type === "update" && todo) {
      setTitle(todo.title);
      setStatus(todo.status);
    } else {
      setTitle("");
      setStatus("Incomplete");
    }
  }, [type, todo, modalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      toast.error("Please Enter A Title.");
      return;
    }
    if (title && status) {
      if (type === "add")
        dispatch(
          addTodo({
            id: uuid(),
            title,
            status,
            time: new Date().toLocaleDateString(),
          })
        );
      toast.success("Task Added Successfully");

        if (todo.title !== title || todo.status !== status) {
          dispatch(updateTodo({ ...todo, title, status }));
          toast.success("Task Updated successfully");
        } else {
          toast.error("No changes made");
          return;
        }
      }
      setModalOpen(false);
    }
  };
  return (
    modalOpen && (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div
            className={styles.closeButton}
            onClick={() => setModalOpen(false)}
            onKeyDown={() => setModalOpen(false)}
            tabIndex={0}
            role="button"
          >
            <MdOutlineClose />
          </div>
          <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            <h1 className={styles.formTitle}>
              {type === "update" ? "Update" : "Add"} Task
            </h1>
            <label
              htmlFor="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            >
              Title
              <input type="text" id="title" />
            </label>
            <label
              htmlFor="status"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              Status
              <select name="status" id="status">
                <option value="incomplete">Incomplete</option>
                <option value="complete">Complete</option>
              </select>
            </label>
            <div className={styles.buttonContainer}>
              <Button type="submit" variant="primary">
                {type === "update" ? "Update" : "Add"} Task
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={() => setModalOpen(false)}
                onKeyDown={() => setModalOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
    // </div>
  );
}

export default TodoModal;
