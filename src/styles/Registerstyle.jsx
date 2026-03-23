import styled from "styled-components";

/* INPUT */
export const Input = styled.input`
  padding: 10px 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  outline: none;
  font-size: 14px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(94, 129, 172, 0.2);
  }
`;

/* CONTAINER */
export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
`;

/* FORM */
export const Form = styled.form`
    margin-top:20px;    
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 25px;
  width: 350px;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  gap: 12px;

  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

/* FIELD WRAPPER */
export const RegisterCredintials = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`;

/* LABEL */
export const Label = styled.label`
  font-size: 13px;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

/* BUTTON */
export const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: bold;

  transition: 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;