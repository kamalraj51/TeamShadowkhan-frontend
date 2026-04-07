import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 0;
 
  color: black;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const LayoutContainer = styled.div`
  background-color:${({ theme }) => theme.colors.background};
  padding: 20 40px;
  margin: 0 auto;
  max-width: 1200px;
 
  
`;
