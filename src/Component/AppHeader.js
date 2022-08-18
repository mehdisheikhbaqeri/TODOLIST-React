import React from "react";
import Button, { SelectButton } from "./Button";
import styles from "../Styles/modules/app.module.scss";

function AppHeader() {
  return (
    <div className={styles.appHeader}>
      <h1>Hello From header</h1>
      <Button variant="primary">Click Me</Button>
      <SelectButton id='status'>
        <option value="All">ALL</option>
        <option value="Incomplete">Incomplete</option>
        <option value="Complete">Complete</option>
      </SelectButton>
    </div>
  );
}

export default AppHeader;
