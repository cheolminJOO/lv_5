import React, { useState } from 'react'
import * as S from '../shared/LoginStyle'
import { useNavigate } from 'react-router-dom'
import { useMutation, useQueryClient } from "react-query"
import { addNewUser } from '../api/todos'
import { Portal } from 'react-portal'
import Modal from '../shared/Modal'
import Auth from '../shared/Auth'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../shared/Schema'


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
            <h1>Todo Diary</h1>       
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
            <button type="button" onClick={onClickBackBtn}> 돌아가기</button>
            <button style={{backgroundColor : formState.isValid ? "black" : "" , color : formState.isValid? "white" : ""}} type="submit">등록하기</button>
          </S.ButtonWrapper>
        </form>
      </S.BoxWrapper>
    </S.Wrapper>
    

  )
}