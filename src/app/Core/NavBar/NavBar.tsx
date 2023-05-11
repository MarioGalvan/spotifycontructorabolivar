import React from "react";
import styles from "../../styles/navbar.module.scss"
import { GLOBAL_CONSTANTS } from "@/app/commons/constanst/global_constanst.constans";

export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
        <a className={styles.navhome}>
            {GLOBAL_CONSTANTS.APP_NAME}
        </a>
      <ul className={styles.navbarNav}>
          <button className={styles.navSigIn}>
            {GLOBAL_CONSTANTS.APP_SIGN_IN}
          </button>
      </ul>
    </nav>
  );
};
