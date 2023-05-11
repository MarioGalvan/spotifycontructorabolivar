import React, { ReactNode } from "react";
import { Footer } from "../Core/Footer/Footer";
import { NavBar } from "../Core/NavBar/NavBar";
type Props = {
  children: ReactNode;
};

export const LayoutApp = ({ children }: Props) => {
  return (
   <>
   <NavBar />
   {children}
   <Footer/>
   </>
  );
};
