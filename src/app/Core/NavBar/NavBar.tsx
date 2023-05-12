import React from "react";
import styles from "../../styles/navbar.module.scss";
import { GLOBAL_CONSTANTS } from "@/app/commons/constanst/global_constanst.constans";
import { SpotifyHandleLogin } from "@/app/api/spotify";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { logout } from "@/app/store/app_store";

export const NavBar = () => {
  const logged = useSelector((state: RootState) => state.AppReducer.logged);
  console.log("logged", logged);
  const dispatch = useDispatch();
  const handleLogout = () => {
    typeof window !== "undefined" && sessionStorage.removeItem("access_token");
    dispatch(logout());
  };

  return (
    <nav className={styles.navbar}>
      <a href="/">
        <img
          src={GLOBAL_CONSTANTS.APP_LOGO}
          alt="logo"
        />
      </a>
      {/* <a className={styles.navhome}>{GLOBAL_CONSTANTS.APP_NAME}</a> */}
      <ul className={styles.navbarNav}>
        <a href="/" className={styles.navBarItemMenu}>
          {GLOBAL_CONSTANTS.APP_HOME}
        </a>

        <a href="/search" className={styles.navBarItemMenu}>
          {GLOBAL_CONSTANTS.APP_SEARCH}
        </a>
      </ul>

      <ul className={styles.navbarNav}>
        <button
          style={{
            marginLeft: 4,
          }}
          className={styles.navSigIn}
          onClick={() => !logged ? SpotifyHandleLogin() : handleLogout()}
        >
          {!logged
            ? GLOBAL_CONSTANTS.APP_SIGN_IN
            : GLOBAL_CONSTANTS.APP_SIGN_OUT}
        </button>
      </ul>
    </nav>
  );
};
