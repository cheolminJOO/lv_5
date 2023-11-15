import styled from "styled-components";

export const BigWrapper = styled.div`

  display: flex;
  width: 100%;
  height: 100%;
  justify-content : center;
  align-items: center;
`

export const Wrapper = styled.div`
display: flex;
justify-content : center;
  align-items: center;
  width: 80%;
  height: 690px;
  background-color: rgb(245, 247, 248);
`

export const InfoWrapper = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction : column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  border-right: 3px solid black;
`

export const CommentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

`

export const InputWidth = styled.div`
  width: 200px;
  height: 50px;
  border: 2px solid black;
  border-radius: 20px;
  margin: 5px 10px;
  text-align: center;
  line-height: 50px;

`

export const ButtonDesign = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: red;
    color: black;
    font-weight: bolder
  }


`

export const InputStyle = styled.input`
  width: 180px;
  height: 30px;
  margin: 0px 20px;
`

export const CommentInput = styled.div`
  text-align: center;
  width : 50px;

`

export const WrapperComment = styled.div`
width: 900px;
  height: 400px;
  display: flex;
  flex-direction:column;


`

export const MakeCommentBox = styled.div`
  margin-bottom: 10px;
`