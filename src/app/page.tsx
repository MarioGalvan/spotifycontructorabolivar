"use client";
import React from "react";
import { LayoutApp } from "./layout/LayoutApp";
import { Provider } from "react-redux";
import { App } from "./App";
import { store } from "./store";

export default function Home() {
  return (
    <Provider store={store}>
      <LayoutApp>
        <App />
      </LayoutApp>
    </Provider>
  );
}
