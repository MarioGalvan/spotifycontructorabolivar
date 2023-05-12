import React, { useState } from "react";
import styles from "../../app/styles/search.module.scss";
import { GLOBAL_CONSTANTS } from "@/app/commons/constanst/global_constanst.constans";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { setLogged } from "@/app/store/app_store";

export const Search_Tracks_Artist = () => {
  const [searchControlState, setsearchControlState] = useState({
    results: [],
  });
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(setLogged(true));
  };

  React.useEffect(() => {
    if (sessionStorage.getItem("access_token")) {
      handleLogin();
    }
  }, []);

  const logged = useSelector((state: RootState) => state.AppReducer.logged);
  return (
    <>
      <div className={styles.containerSearch}>
        <input
          disabled={!logged}
          className={styles.search}
          type="search"
          placeholder="Busca tus canciones y artistas favoritos.."
        />
      </div>

      <div className={styles.containerResult}>
        <p>
          {!logged
            ? GLOBAL_CONSTANTS.SEARCH.NOT_AUTHENTICATED
            : GLOBAL_CONSTANTS.SEARCH.RESULT_DEFUALT}
        </p>
      </div>
    </>
  );
};
