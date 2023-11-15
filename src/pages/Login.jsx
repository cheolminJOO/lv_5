import React, { useState } from 'react'
import * as S from '../shared/Style/LoginStyle'
import { useNavigate } from 'react-router-dom'
import { useMutation, useQueryClient } from 'react-query';
import { checkLogin } from '../api/todos';
import {Portal} from 'react-portal'
import Modal from '../shared/Modal/Modal';
import { getCookie, setCookie } from '../shared/Cookie';
import Auth from '../shared/Auth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../shared/Schema';
import { Button } from '../component/Button';


export default function Login() {
  const {register,handleSubmit,reset,formState} = useForm({
    mode : "onChange",
    resolver : yupResolver(schema)
  })
  const queryClient = useQueryClient();
  const mutation = useMutation(checkLogin, {
    onSuccess : () => {
      queryClient.invalidateQueries("user")
    }
  })

  console.log("뮤테이션",mutation)
  const [IsOpenFirstModal,setIsOpenFirstModal] = useState(false);


  const navigate = useNavigate();

  const onClickSignUp = () => {
    navigate('/signup')
  }

  const onClickLoginBtn = (data) => {
    const checkIdAndPW = {
      id : data.id,
      password : data.password
    }
    mutation.mutate(checkIdAndPW) 
    setIsOpenFirstModal((prev) => !prev)
    localStorage.setItem("token", mutation.data)

    //배치형이라 이 함수가 끝나고 mutation.data에 값이 들어간다. 지금은 값이 없는 상태,
    //그래서 두 번 눌렀을 때 진행이 되는 것
  }

  const token = mutation.data // 여기에 토큰있음.

  const tokenCheck = getCookie("token") // 토큰이 있다면 글자가 있고 없으면 undefined
  console.log("tokenCheck",tokenCheck)
  
  const onClickCloseModal = () => {
    setIsOpenFirstModal((prev) => !prev)
  }

  // const handleSubmit = async () => {
  //   const resp
  // }

  if(token) { // 토큰이 쿠키에 담김.ㄷㄷㄷㄷ
    const time = 3600; //1시간
    const expiration = new Date(Date.now() + time * 1000);
    //Date.now() => 현재 시간을 밀리세컨으로 반환
    //그래서 1000을 곱한다.
    ///이러면 현재시간 나온다.
    setCookie('token', token, {
      path: "/",
      secure : true,
      sameSite : "none",
      expires:expiration //만료
    });
    setTimeout (() => {
      alert("토큰이 만료됐습니다. 다시 로그인해주세요");
    }, time * 1000)
  }



  return (
    <S.Wrapper>
      <Auth/>
      <S.BoxWrapper>
        <form onSubmit={handleSubmit(onClickLoginBtn)}>
          {mutation.data !==undefined && (
          <Portal node = {document && document.getElementById('modal-root')}>
            <Modal token ={token} onClickCloseModal={onClickCloseModal}/>
          </Portal>
        )} 
          <div>
            <S.H1Style>Todo Diary</S.H1Style>
          </div>
          <S.InputWrapper>
            <S.InputContentsWrapper>
              <S.InputStyle placeholder='ID를 입력하세요' type='text' {...register("id")}/>
              <div style={{color : "red"}}>{formState.errors.id?.message}</div>
            </S.InputContentsWrapper>
            <S.InputContentsWrapper>
              <S.InputStyle placeholder='비밀번호를 입력하세요' type='password' {...register("password")}/>
              <div style={{color : "red"}}>{formState.errors.password?.message}</div>
            </S.InputContentsWrapper>
          </S.InputWrapper>
          <S.ButtonWrapper>
          <Button style={{backgroundColor : formState.isValid ? "black" : "" , color : formState.isValid? "white" : ""}} type="submit">로그인</Button>
          <Button backgroundColor = "rgb(0, 169, 255)" hoverColor = "rgb(137, 207, 243)" type="button" onClick={onClickSignUp}>회원가입</Button>
          </S.ButtonWrapper>
        </form>
      </S.BoxWrapper>
    </S.Wrapper>
  )
}
