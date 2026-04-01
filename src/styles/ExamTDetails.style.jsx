import styled from "styled-components";

export const ContainerExamTD=styled.div`

padding:20px 15px;

`

 export const H2=styled.h2`
 margin-bottom:10px;

`

export  const  ContentETD=styled.div`
display:flex;
padding:15px 10px;
margin-bottom:5px;
justify-content:space-around;
background-color:${({ theme }) => theme.colors.primary};
 border-top-left-radius: 10px;
border-bottom-right-radius: 10px;


`
export const P=styled.p`
font-size:20px;
color:${({ theme }) => theme.colors.surface};
@media(max-width:768px){
font-size:16px;
}

`
