import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 0;
  min-height: 100vh;
  color: black;
  background-color:  #F8F9FC;
`;

export const LayoutContainer = styled.div`
  background-color:${({ theme }) => theme.colors.background};
  padding: 20 40px;
  margin: 0 auto;
  max-width: 1200px;
  background-color: white;
  
`;
