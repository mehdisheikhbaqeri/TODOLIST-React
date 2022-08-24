import React from "react";
import PageTitle from "./Component/PageTitle";
import AppHeader from "./Component/AppHeader";
import AppContent from "./Component/AppContent";
import Styles from "./Styles/modules/app.module.scss";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="container">
        <PageTitle>TODO LIST</PageTitle>
        <div className={Styles.app__wrapper}></div>
        <AppHeader />
        <AppContent />
      </div>
      <Toaster position="button-right" toastOptions={{style:{
        fontSize:'1.4rem'
      }}}/>
    </>
  );
}

export default App;
