import React from "react";
import { LayoutContainer, MainContainer } from "../styles/Layout.style";

function Layout({ children }) {
  return (
    <MainContainer>
      <LayoutContainer>{children}</LayoutContainer>
    </MainContainer>
  );
}

export default Layout;
