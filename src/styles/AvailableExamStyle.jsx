import styled from "styled-components";

export const AvailableContainer=styled.div`

`
export const HeadingTable=styled.div`
background-color:${({ theme }) => theme.colors.primary};
border: 2px solid #333;
  border-radius: 8px;
  padding: 16px;
  margin-bottom:5px;
 
`
export const H2=styled.h2`
color:${({ theme }) => theme.colors.surface};

`
export const AvailableTable=styled.table`
 width: 100%;
  border-collapse: collapse;

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

