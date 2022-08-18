import React from "react";
import PageTitle from "./Component/PageTitle";
import AppHeader from "./Component/AppHeader";
import Styles from "./Styles/modules/app.module.scss";
// import { SelectButton } from "./Component/Button";

function App() {
  return (
    <div className="container">
      <PageTitle>TODO LIST</PageTitle>
      <div className={Styles.app__wrapper}></div>
      <AppHeader/>
    </div>
  );
}

export default App;
