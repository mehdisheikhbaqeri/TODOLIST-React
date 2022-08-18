import React from "react";
import {MdOutlineClose} from 'react-icons/md';
import styles from '../Styles/modules/modal.module.scss'

function TodoModal() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.closeButton}>
          <MdOutlineClose></MdOutlineClose>
        </div>
        <form className={styles.form}>
          <h1 className={styles.formTitle}>Add</h1>
          <label htmlFor="title">
            title
<input type='text' id="title"/>
          </label>
        </form>
      </div>
    </div>
  );
}

export default TodoModal;
