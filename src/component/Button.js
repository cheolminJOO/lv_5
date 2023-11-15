import styled from "styled-components";

export const Button = styled.button`
  width: 100px;
  height: 50px;
  background-color:  ${(props) => (props.backgroundColor ? props.backgroundColor : "rgb(255, 227, 187)")};
  color : ${(props) => (props.color ? props.color : "deepgray" )};
  border-radius: 20px;
  font-weight: 700;
  &:hover {
    background-color: ${(props) => (props.hoverColor ? props.hoverColor : "rgb(255, 210, 143)")};
    color: black;
    font-weight: bolder;
  }
  

`