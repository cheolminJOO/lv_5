import { HomeOutlined } from "@ant-design/icons";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

`

export const HeaderWrapper = styled.div`
  width: 80%;
  background-color: rgb(131, 162, 255);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

`
export const HeaderButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const MyProfileStyle = styled.div`
  display: flex;
  width: 150px ;
  cursor: pointer;
`

export const ProfileImage = styled.img`
  box-shadow: 5px 5px 5px 5px gray;
  border-radius: 25px;

  &:hover {
    background-color: black;
  }
`

export const HomeOutLined = styled(HomeOutlined) `
font-size: 50px;
box-shadow: 5px 5px 5px 5px gray;
border-radius: 20px;

&:hover {
  background-color: white;
}

`

export const TitleStyle = styled.h1 `
  font-family: 'Nanum Pen Script', cursive;
;
`
