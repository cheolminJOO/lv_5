import React, { useState } from 'react'
import * as S from '../shared/Style/LoginStyle'
import { useNavigate } from 'react-router-dom'
import { useMutation, useQueryClient } from "react-query"
import { addNewUser } from '../api/todos'
import { Portal } from 'react-portal'
import Modal from '../shared/Modal/Modal'
import Auth from '../shared/Auth'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../shared/Schema'
import { Button } from '../component/Button'
import { emailTest, passwordTest } from '../utills/regExp'


export default function SignUp() {
  const {register, handleSubmit, formState,reset} = useForm({
    mode: "onChange",
    resolver: yupResolver(schema)
  })
  const [IsOpenFirstModal,setIsOpenFirstModal] = useState(false);
  const queryClient = useQueryClient();
  const mutation = useMutation(addNewUser, {
    onSuccess : () => {
      queryClient.invalidateQueries("user")
    }
  })

  console.log("뮤테이션",mutation)

  const navigate = useNavigate();

  const onClickBackBtn = () => {
    navigate('/')
  }
  const onClickSubmitBtn = (data) => {
    if( passwordTest(data.password) !== true) return alert("최소 8자,하나의 문자,하나의 숫자, 하나의 특수문자가 비밀번호에 들어가야 합니다.")

    if(emailTest(data.id) !== true) return alert ("이메일 형식이 맞는지 확인하세요")
    const newUser = {
      id : data.id,
      password : data.password
    }
    mutation.mutate(newUser)
    setIsOpenFirstModal((prev) => !prev)

    reset();
  }

  const onClickCloseModal = () => {
    setIsOpenFirstModal((prev) => !prev)
  }

  const text = "회원가입"


  return (
    <S.Wrapper>
      <Auth/>
      
      <S.BoxWrapper>
        <form onSubmit={handleSubmit(onClickSubmitBtn)}>
          {mutation.data !==undefined && (
            <Portal node = {document && document.getElementById('modal-root')}>
              <Modal text ={text} onClickCloseModal={onClickCloseModal}/>
            </Portal>
          )} 
          <div>
            <S.H1Style>Todo Diary</S.H1Style>       
          </div>
          <S.InputWrapper>
            <S.InputContentsWrapper>
              <S.InputStyle  placeholder='Id를 입력하세요' type='text' {...register("id")}/>
              <S.ErrorMessageStyle>{formState.errors.id?.message}</S.ErrorMessageStyle>
            </S.InputContentsWrapper>
            <S.InputContentsWrapper>
              <S.InputStyle placeholder='비밀번호를 입력하세요'  type='password' {...register("password")}/>
              <S.ErrorMessageStyle>{formState.errors.password?.message}</S.ErrorMessageStyle>
            </S.InputContentsWrapper>
          </S.InputWrapper>
          <S.ButtonWrapper>
            <Button backgroundColor = "rgb(0, 169, 255)" hoverColor = "rgb(137, 207, 243)" type="button" onClick={onClickBackBtn}> 돌아가기</Button>
            <Button style={{backgroundColor : formState.isValid ? "black" : "" , color : formState.isValid? "white" : ""}} type="submit">등록하기</Button>
          </S.ButtonWrapper>
        </form>
      </S.BoxWrapper>
    </S.Wrapper>
    

  )
}