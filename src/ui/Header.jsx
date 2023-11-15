import React, { useState } from 'react'
import * as S from '../shared/Style/HeaderStyle'
import { useNavigate } from 'react-router-dom';
import { removeCookie } from '../shared/Cookie';
import { HomeOutlined } from '@ant-design/icons';
import { Button } from '../component/Button';

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
        <S.HomeOutLined onClick={onClickLogo}/>      
        <S.TitleStyle>플레이리스트</S.TitleStyle>
        <S.MyProfileStyle>
          <S.ProfileImage onClick={onClickMyProfile} src="picture/avatar.png" alt='마이페이지'/>
            {isActive && (
              <S.HeaderButtonWrapper>
                <Button onClick={onClickMyPageBtn}>마이페이지</Button>
                <Button onClick={onClickLogoutBtn}>로그아웃</Button>
              </S.HeaderButtonWrapper>
            )}
        </S.MyProfileStyle>
    </S.HeaderWrapper>
  </S.Wrapper>
  )
}
