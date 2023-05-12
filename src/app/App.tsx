import React, { useState } from "react";
import { APP_HTTP_SPOTIFY } from "./api/interceptor-http";
import { useDispatch } from "react-redux";
import { setLogged } from "./store/app_store";
import { Card } from "./Core/Card/Card";
import styles from "./styles/home.module.scss";

export const App = () => {
  const [dataGeneral, setdataGeneral] = useState([]);
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(setLogged(true));
  };

  if (typeof window !== "undefined") {
    if (sessionStorage.getItem("access_token")) {
      handleLogin();
    }

    const urlParams = new URLSearchParams(window.location.hash.substring(1));
    let access_token = urlParams.get("access_token");
    if (access_token) {
      sessionStorage.setItem("access_token", access_token);
      handleLogin();
    }
  }

  const __renderCards = () => {
    return dataGeneral.map((item: any, index) => (
      <Card
        key={index}
        title={item?.artists[0].name}
        description={item.name}
        image={item.images[0].url}
      />
    ));
  };

  React.useEffect(() => {
    APP_HTTP_SPOTIFY({
      url: "browse/new-releases?country=CO&limit=20",
      method: "GET",
    })
      .then((response) => {
        setdataGeneral(response?.albums?.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <div className={styles.homeContainer}>{__renderCards()}</div>;
};