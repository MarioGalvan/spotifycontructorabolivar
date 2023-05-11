"use client";
import React, { useState } from "react";
import { Card } from "./Core/Card/Card";
import { LayoutApp } from "./layout/LayoutApp";
import styles from "./styles/home.module.scss";
import { APP_HTTP_SPOTIFY, GetBearerToken } from "./api/interceptor-http";
import { GLOBAL_CONSTANTS } from "./commons/constanst/global_constanst.constans";

export default function Home() {
  const [dataGeneral, setdataGeneral] = useState([]);

  React.useEffect(() => {
    APP_HTTP_SPOTIFY({
      url: 'browse/new-releases?country=CO&limit=20',
      method: "GET",
    })
      .then((response) => {
        console.log(response?.albums?.items);
        setdataGeneral(response?.albums?.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const __renderCards = () => {
    return dataGeneral.map((item:any, index) => (
      <Card
        key={index}
        title={item?.artists[0].name}
        description={item.name}
        image={item.images[0].url}
      />
    )
    );
  };


  return (
    <LayoutApp>
      <div className={styles.homeContainer}>
       {__renderCards()}
      </div>
    </LayoutApp>
  );
}
