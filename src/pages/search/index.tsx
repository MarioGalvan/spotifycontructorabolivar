"use client";
import "../../app/globals.css";
import { LayoutApp } from "@/app/layout/LayoutApp";
import { store } from "@/app/store";
import { Provider } from "react-redux";
import React from "react";
import Search_Tracks_Artist from "./search";

export default function SearchPage() {
  return (
    <Provider store={store}>
      <LayoutApp>
        <Search_Tracks_Artist />
      </LayoutApp>
    </Provider>
  );
}
