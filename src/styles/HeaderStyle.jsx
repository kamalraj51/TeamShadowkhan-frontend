import styled from "styled-components";

export const HeaderMain = styled.div`
  height: 80px;
  width: 100%;
  padding: 0px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.secondary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
`;

export const Logo = styled.div`
  h2 {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: ${({ theme }) => theme.colors.surface};
    text-decoration: none;
    cursor: pointer;
    padding: 10px 0;
  }
    a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  a:active {
    color: ${({ theme }) => theme.colors.primary};
  }

  
  @media (max-width: 768px) {
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;

    display: flex;
    flex-direction: column;   
    align-items: center;

    background-color: ${({ theme }) => theme.colors.secondary};

    max-height: ${({ isOpen }) => (isOpen ? "500px" : "0px")};
    overflow: hidden;

    transition: max-height 0.3s ease-in-out;
  }
`;

export const MenuToggle = styled.div`
  display: none;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.surface};
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 768px) {
    display: block;
  }
`;