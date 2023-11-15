import styled from "styled-components";


export const WrapperOfWrapper = styled.div`

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;


`

export const BodyWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  background-color: rgb(245, 247, 248);

`

export const SongCard= styled.div`
  width: 200px;
  height: 310px;
  border: 2px solid black;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SongWrapper = styled.div`
  width: 800px;
  height: 680px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 12px;

`

export const ImageStyle = styled.img`
  width: 200px;
  height: 180px;
  border-radius: 20px;
`

export const SongNameStyle = styled.div`

  font-weight: 600;
`


export const InputStyle = styled.input`
  width: 200px;
  height: 50px;
  border-radius: 20px;
  margin-bottom: 10px;
  &:focus {
    border: 4px solid skyblue;
  }
  
`

export const HiddenInputStyle = styled.input`
  display: none;
`

export const InputWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-right: 3px solid black;
  margin: 0px 10px;
`


export const ImagePreviewBox = styled.div`
  width: 250px;
  height: 250px;
  border: 2px solid black;
  border-radius: 20px;
  margin-bottom: 10px;
`

export const ImagePreviewStyle = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 20px;
  border: 2px solid black;
`

export const DescriptionStyle = styled.textarea`

  width: 250px;
  height: 50px;
  &:focus {
    border: 4px solid skyblue;
  }
`

export const ButtonStyleWrapper = styled.div`
  display: flex;
`

export const ErrorMessageStyle = styled.div`
  color: red;
  font-weight: 500;
`

export const FormStyle = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

