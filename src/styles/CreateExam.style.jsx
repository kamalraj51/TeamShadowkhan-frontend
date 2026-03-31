import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.background};
  margin: 10px 0px;
`;

export const Form = styled.form`
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 500px;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

// Each form field wrapper
export const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

// Label styling
export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.text};
`;

//select
export const Select = styled.select`
  font-weight: bold;
  margin-bottom: 4px;
  padding: 20px 30px;
  background-color: white;
  color: ${({ theme }) => theme.colors.text};
  border-radius: 6px;
`;

// Input styling
export const Input = styled.input`
  padding: 10px 12px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 6px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

// Button styling
export const Button = styled.button`
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.surface};
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    opacity: 0.85;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

// Optional unit span (for minutes or %)
export const Unit = styled.span`
  margin-left: 8px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const Row = styled.option``;
