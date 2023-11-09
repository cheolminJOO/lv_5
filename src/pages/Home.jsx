import React from 'react'
import { useNavigate } from 'react-router-dom'
import { removeCookie } from '../shared/Cookie';

export default function Home() {
  const navigate = useNavigate();

  const onClickMyPageBtn = () => {
    navigate('/mypage')
  }

  const onClickLogoutBtn = () => {
    removeCookie("token")
    navigate('/')
  }

  return (
    <div>
      <button onClick={onClickMyPageBtn}>인가 확인하기</button>
      <button onClick={onClickLogoutBtn}>로그아웃</button>
    </div>
  )
}
