import React from "react";
import { LayoutContainer, MainContainer } from "../styles/Layoutstyle";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
    <Header/>
    <MainContainer>
      <LayoutContainer>{children}</LayoutContainer>
    </MainContainer>
    </>
  );
}

export default Layout;
