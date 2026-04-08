import styled from "styled-components";

export const AvailableContainer=styled.div`
margin:10px 0px;
padding:0px 10px;

`
export const HeadingTable=styled.div`
background-color:${({ theme }) => theme.colors.primary};
border: 2px solid #333;
  border-radius: 8px;
  padding: 16px;
  margin-bottom:5px;
 
`
export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;
export const H2=styled.h2`
color:${({ theme }) => theme.colors.surface};

`
export const AvailableTable=styled.table`
 width: 100%;
  border-collapse: collapse;
   @media (max-width: 768px) {
    font-size: 12px;
  }

`
export const Th=styled.th`
border: 1px solid #333;
  padding: 8px;
  text-align: left;
  
`
export const Td=styled.td`
border: 1px solid #333;
  padding: 8px;
  text-align: left;
  
`
export const Add=styled.button`
  background-color:;
   padding: 10px 18px;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left:10px;
`
export const Edit=styled.button`
   background-color:#007bff;
    padding: 10px 18px;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left:10px;
`
export const Upload=styled.button`
   background-color:#fd7e14;
    padding: 10px 18px;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  margin:5px 10px;
`
export const Delete=styled.button`
   background-color:#dc3545;
    padding: 10px 18px;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const Select = styled.select`
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #aaa;
`;

export const Option = styled.option``;

export const Input = styled.input`
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #aaa;
`;

export const Button = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ButtonSecondary = styled(Button)`
  background-color: #28a745;

  &:hover {
    background-color: #1e7e34;
  }
`;