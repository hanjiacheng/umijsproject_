import React from "react";
import styles from "./index.less";
import Nav from "../components/nav";

export default () => {
  return (
    <div>
      <Nav />
      <h1 className={styles.title}>Hello world</h1>
      <h1 className={styles.title}>this is index page</h1>
    </div>
  );
};
