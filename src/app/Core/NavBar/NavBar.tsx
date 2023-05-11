import React from "react";
import styles from "../../styles/navbar.module.scss";
import { GLOBAL_CONSTANTS } from "@/app/commons/constanst/global_constanst.constans";
import { SpotifyHandleLogin } from "@/app/api/spotify";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

export const NavBar = () => {
  const logged = useSelector((state: RootState) => state.AppReducer.logged);
  console.log("value", logged)

  return (
    <nav className={styles.navbar}>
      <a className={styles.navhome}>{GLOBAL_CONSTANTS.APP_NAME}</a>
      <ul className={styles.navbarNav}>
        {!logged && (
        <button
          className={styles.navSigIn}
          onClick={() => SpotifyHandleLogin()}
        >
          {GLOBAL_CONSTANTS.APP_SIGN_IN}
        </button>
        )}
      </ul>
    </nav>
  );
};
