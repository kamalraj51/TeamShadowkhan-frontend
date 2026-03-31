import styled from "styled-components";

export const TopicContainer=styled.div`

`


export const TopicHeading=styled.h2`
text-align:center;
margin-bottom:10px;

`
export const TopicContent=styled.div`
display:flex;
justify-content:space-between;
padding:15px 5px;
background-color:${({ theme }) => theme.colors.secondary};

border-radius:10px;
margin-bottom:5px;
`


export const TopicName=styled.input`
font-size:16px;

 border-top-left-radius: 10px;
border-bottom-right-radius: 10px;

color:${({ theme }) => theme.colors.textPrimary};
padding:10px 10px; 
 outline: none;


`

export const Button=styled.button`
  background: ${({ theme }) => theme.colors.primary};
  padding:5px;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.border};
    cursor: not-allowed;
  }


`
export const Buttons=styled.div`
display:flex;
gap:10px;
`
