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

export const NavLink2=styled.a`
    text-decoration:none;
    &:hover{
        color:grey;
        cursor:pointer;
    }
`

export const ContentQuesHead = styled.div`
  display: flex;
  padding: 15px 10px;
  margin-bottom: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  align-items: center;
  width:95%;

`;
export const ContentQues = styled.div`

  display: flex;
  padding: 15px 10px;
  margin-bottom: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  align-items: center;
  width:95%;
  justify-content:space-between;
`;
// Define column widths for proper alignment
export const Para = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.surface};
  margin: 0; /* remove default margin */

  &:nth-child(1) {
    width: 5%; /* SNO */
    text-align: center;
  }
  &:nth-child(2) {
    width: 50%; /* Question Name */
    text-align: left;
    padding-left: 10px;
  }
  &:nth-child(3) {
    width: 15%; /* type */
    text-align: center;
  }
  &:nth-child(4) {
    width: 30%; /* action buttons */
    text-align: center;
    display: flex;
    justify-content: space-around;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    &:nth-child(2) {
      width: 45%;
    }
    &:nth-child(3) {
      width: 20%;
    }
    &:nth-child(4) {
      width: 35%;
    }
  }
`;

