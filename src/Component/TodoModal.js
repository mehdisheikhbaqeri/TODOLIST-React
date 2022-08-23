import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import styles from "../Styles/modules/modal.module.scss";
import Button from "./Button";

function TodoModal({ modalOpen, setModalOpen }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Incomplete");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, status);
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
            <h1 className={styles.formTitle}>Add Task</h1>
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
                Add Task
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
