'use client';
import React, { useState } from "react";
import styles from "../../app/styles/search.module.scss";
import { GLOBAL_CONSTANTS } from "@/app/commons/constanst/global_constanst.constans";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { setLogged } from "@/app/store/app_store";
import { APP_HTTP_SPOTIFY } from "@/app/api/interceptor-http";
import { Card } from "@/app/Core/Card/Card";
import { Loader_APP } from "@/app/Core/Loader/Loader";

export default function Search_Tracks_Artist() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setloading] = useState(false);
  const [searching, setsearching] = useState(false);

  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(setLogged(true));
  };

  React.useEffect(() => {
    if (sessionStorage.getItem("access_token")) {
      handleLogin();
    }
  }, []);

  const handleInputChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = React.useMemo(() => {
    if (searchTerm.length == 0) {
      return;
    }
    APP_HTTP_SPOTIFY({
      method: "GET",
      url: `search?q=${searchTerm}&type=artist`,
    })
      .then((response) => {
        console.log("respon", response.artists?.items);
        setSearchResults(response.artists?.items ?? []);
        setloading(false);
        setsearching(false);
      })
      .catch((err) => {
        console.log("err", err);
        setloading(false);
        setsearching(false);
      });
  }, [searchTerm]);

  React.useEffect(() => {
    if (searchTerm.length > 0 && searching) {
      setloading(true);
      const getData = setTimeout(() => {
        handleSearch;
      }, 4000);

      return () => {
        clearTimeout(getData);
      };
    }
  }, [searchTerm]);

  const __renderResults = () => {
    return (
      searchResults.length > 0 &&
      !searching &&
      searchResults.map((item: any, index) => (
        <Card
          key={index}
          title={item?.name}
          description={item.name}
          image={item.images[0]?.url ?? GLOBAL_CONSTANTS.APP_AVATAR_DEFUALT}
        />
      ))
    );
  };
  console.log("loading", {
    loading,
    searching,
  });

  const logged = useSelector((state: RootState) => state.AppReducer.logged);

  return (
    <>
      <div className={styles.containerSearch}>
        <input
          disabled={!logged}
          className={styles.search}
          onKeyUp={(e) => {
            setsearching(true);
            handleInputChange(e);
          }}
          type="search"
          placeholder="Busca tus artistas favoritos.."
        />
      </div>

      <div className={styles.containerResult}>
        {searching ? (
          <Loader_APP />
        ) : (
          searchResults.length == 0 && (
            <p>
              {!logged
                ? GLOBAL_CONSTANTS.SEARCH.NOT_AUTHENTICATED
                : GLOBAL_CONSTANTS.SEARCH.RESULT_DEFUALT}
            </p>
          )
        )}
      </div>

      <div className={styles.SearchContainer}>{__renderResults()}</div>
    </>
  );
}
