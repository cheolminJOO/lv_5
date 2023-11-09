import React, { useState } from 'react'
import * as S from '../shared/LoginStyle'
import { useNavigate } from 'react-router-dom'
import { useMutation, useQueryClient } from "react-query"
import { addNewUser } from '../api/todos'
import Modal2 from '../shared/Modal2'
import { Portal } from 'react-portal'
import Modal from '../shared/Modal'
import { getCookie } from '../shared/Cookie'
import Auth from '../shared/Auth'


export default function SignUp() {

  const [id,setId] = useState('');
  const [password,setPassword] = useState('')
  const [isOpenFirstModal, setIsOpenFirstModal] = useState(false);
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
  const onClickSubmitBtn = () => {
    if(!id && !password) {
      return alert("아이디와 패스워드를 입력하세요")
    }

    const newUser = {
      id,
      password,
    }
    mutation.mutate(newUser)
    setIsOpenFirstModal((prev) => !prev)
   
  }

  const onChangeId = (event) => {
    setId(event.target.value)
  }

  const onChangePW = (event) => {
    setPassword(event.target.value)
  }

  const onClickCloseModal = () => {
    setIsOpenFirstModal((prev) => !prev)
  }

  const text = "회원가입"


  return (
    <S.Wrapper>
      <Auth/>
      
      <S.BoxWrapper>
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
            <S.LabelStyle>아이디 :</S.LabelStyle>
            <S.InputStyle value={id} onChange={onChangeId} type='text'/>
          </S.InputContentsWrapper>
          <S.InputContentsWrapper>
            <S.LabelStyle>비밀번호 :</S.LabelStyle>
            <S.InputStyle value={password} onChange={onChangePW} type='password'/>
          </S.InputContentsWrapper>
        </S.InputWrapper>
        <S.ButtonWrapper>
          <button onClick={onClickBackBtn}> 돌아가기</button>
          <button onClick={onClickSubmitBtn}>등록하기</button>
        </S.ButtonWrapper>
      </S.BoxWrapper>
    </S.Wrapper>
    

  )
}