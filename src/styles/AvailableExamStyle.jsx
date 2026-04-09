import styled from "styled-components";

export const AvailableContainer = styled.div`
  margin: 10px 0px;
  padding: 0px 10px;
`;

export const HeadingTable = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 5px;
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.surface};
`;

export const AvailableTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Th = styled.th`
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 8px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.surface};
`;

export const Td = styled.td`
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 8px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textPrimary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;
export const ButtonDiv=styled.div`
display:flex;
gap:5px;
`

export const Add = styled.button`
  background-color: ${({ theme }) => theme.colors.success};  /* was empty before */
  padding: 10px 18px;
  border: none;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.surface};
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left: 10px;

  &:hover {
    opacity: 0.85;
  }
`;

export const Edit = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px 18px;
  border: none;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.surface};
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left: 10px;

  &:hover {
    opacity: 0.85;
  }
`;

export const Upload = styled.button`
  background-color: ${({ theme }) => theme.colors.warning};
  padding: 10px 18px;
  border: none;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.surface};
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 5px 10px;

  &:hover {
    opacity: 0.85;
  }
`;

export const Delete = styled.button`
  background-color: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.surface};
 padding: 10px 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.85;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.surface};
`;

export const Select = styled.select`
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Option = styled.option`
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Input = styled.input`
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const Button = styled.button`
background-color: ${({ theme }) => theme.colors.primary};
color: ${({ theme }) => theme.colors.surface};
padding: 10px 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.85;
  }
`;

export const ButtonSecondary = styled(Button)`
  background-color: ${({ theme }) => theme.colors.success};

  &:hover {
    opacity: 0.85;
  }
`;