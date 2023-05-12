"use client";
import "../../app/globals.css";
import { LayoutApp } from "@/app/layout/LayoutApp";
import { store } from "@/app/store";
import { Provider, useDispatch } from "react-redux";
import { Search_Tracks_Artist } from "./search";
import { setLogged } from "@/app/store/app_store";
import React from "react";

export default function SearchPage() {
  
  return (
    <Provider store={store}>
      <LayoutApp>
        <Search_Tracks_Artist />
      </LayoutApp>
    </Provider>
  );
}
