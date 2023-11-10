import React, { useState } from 'react'
import * as S from '../shared/HeaderStyle'
import { useNavigate } from 'react-router-dom';
import { removeCookie } from '../shared/Cookie';

export default function Header() {
  const [isActive, setIsActive] = useState(false)
  const navigate = useNavigate();

  const onClickMyPageBtn = () => {
    navigate('/mypage')
  }

  const onClickMyProfile = () => {
    setIsActive((prev) => !prev)
  }

  const onClickLogoutBtn = () => {
    removeCookie("token")
    navigate('/')
  }

  const onClickLogo = () => {
    navigate('/home')
  }

  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <S.HeaderImageLogo onClick={onClickLogo} src="picture/1.jpg" alt='강아지'/>       
        <h1>플레이리스트</h1>
        <S.MyProfileStyle>
          <img onClick={onClickMyProfile} src="picture/avatar.png" alt='마이페이지'/>
            {isActive && (
              <div>
                <button onClick={onClickMyPageBtn}>마이페이지</button>
                <button onClick={onClickLogoutBtn}>로그아웃</button>
              </div>
            )}
        </S.MyProfileStyle>
    </S.HeaderWrapper>
  </S.Wrapper>
  )
}
