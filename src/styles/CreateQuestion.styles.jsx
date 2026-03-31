import styled from "styled-components";

/* QUEATION CONTAINER */
export const QuestionContainer = styled.div`
  padding: 50px 200px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

/* QUESTION WRAPPER */
export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

/* TITLE */
export const QuestionTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 6px;

  color: ${({ theme }) => theme.colors.primary};
`;

/* SUBTITLE */
export const QuestionSubtitle = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 20px;
`;

/* FORM */
export const QuestionForm = styled.form`
  background: ${({ theme }) => theme.colors.surface};
  padding: 30px;
  width: 600px;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  gap: 14px;

  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);

  h2 {
    text-align: center;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
    @media(max-width:600px){
    width:300px;
    }
`;

/* FIELD */
export const QuestionField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

/* LABEL */
export const QuestionLabel = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

/* INPUT */
export const QuestionInput = styled.input`
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
export const CreateQuesError = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: 12px;
`;

/* API ERROR */
export const ApiError = styled.p`
  color: ${({ theme }) => theme.colors.error};
  text-align: center;
  font-size: 13px;
`;

/* BUTTON */
export const CreateQuesButton = styled.button`
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
export const QuestionFooter = styled.p`
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
