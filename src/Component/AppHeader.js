import React, { useState } from "react";
import Button, { SelectButton } from "./Button";
import styles from "../Styles/modules/app.module.scss";
import TodoModal from "./TodoModal";

function AppHeader() {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <div className={styles.appHeader}>
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Add Tasks
      </Button>
      <SelectButton id="status">
        <option value="All">ALL</option>
        <option value="Incomplete">Incomplete</option>
        <option value="Complete">Complete</option>
      </SelectButton>
      <TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default AppHeader;
