import styled from "styled-components";

/* CONTAINER */
export const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.background};
`;

/* WRAPPER */
export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* TITLE */
export const LoginTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 6px;

  color: ${({ theme }) => theme.colors.primary};
`;

/* SUBTITLE */
export const LoginSubtitle = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 20px;
`;

/* FORM */
export const LoginForm = styled.form`
  background: ${({ theme }) => theme.colors.surface};
  padding: 30px;
  width: 350px;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  gap: 14px;

  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);

  h2 {
    text-align: center;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: 5px;
  }
`;

/* FIELD */
export const LoginField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

/* LABEL */
export const LoginLabel = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

/* INPUT */
export const LoginInput = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 14px;

  outline: none;
  transition: border 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

/* ERROR */
export const LoginError = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: 12px;
`;

/* BUTTON */
export const LoginButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  border: none;
  border-radius: 6px;

  background: ${({ theme }) => theme.colors.primary};
  color: white;

  font-weight: 600;
  cursor: pointer;

  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.border};
    cursor: not-allowed;
  }
`;

/* FOOTER */
export const LoginFooter = styled.p`
  text-align: center;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSecondary};

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;

  /* Make the wrapper look like the input box */
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  padding: 0 10px;
  transition: border 0.2s ease;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  i {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 16px;
    cursor: pointer;
    flex-shrink: 0;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const LoginInputPass = styled.input`
  flex: 1;
  padding: 10px 8px;
  font-size: 14px;
  border: none;         /* Remove border from input */
  outline: none;        /* Remove focus ring from input */  
  background: transparent;
  color: ${({ theme }) => theme.colors.textPrimary};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;