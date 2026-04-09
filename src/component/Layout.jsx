import React from "react";
import { LayoutContainer, MainContainer } from "../styles/Layoutstyle";
import Header from "./Header";
import { Toaster } from "sonner";

function Layout({ children }) {
  return (
    <>
    <Header/>
    <MainContainer>
      <Toaster/>
      <LayoutContainer>{children}</LayoutContainer>
    </MainContainer>
    </>
  );
}

export default Layout;
