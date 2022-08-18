import React from "react";
import Button, { SelectButton } from "./Button";
import styles from "../Styles/modules/app.module.scss";
import TodoModal from "./TodoModal";

function AppHeader() {
  return (
    <div className={styles.appHeader}>
      <Button variant="primary">Add Tasks</Button>
      <SelectButton id="status">
        <option value="All">ALL</option>
        <option value="Incomplete">Incomplete</option>
        <option value="Complete">Complete</option>
      </SelectButton>
      <TodoModal />
    </div>
  );
}

export default AppHeader;
