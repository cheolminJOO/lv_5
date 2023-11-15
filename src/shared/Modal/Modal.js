import React from 'react';
import '../Style/FirstModal.css';
import { useNavigate } from 'react-router-dom';
import * as S from '../Style/Modal'
import { Button } from '../../component/Button';


const Modal = ({ onClickCloseModal,token,text }) => {

  

  const navigate = useNavigate();

  const MoveToLandingPage = () => {
    navigate('/')
  }

  const MoveToHomeBtn = () => {
    navigate('/home')
    
  }

  return (
    <div className="modal">
      <div className="modal-content">
        {text && (
        <S.MessageWrapper>
        <h1>회원가입에 성공했습니다.</h1>
        <h3>환영합니다 </h3>
        <Button onClick={MoveToLandingPage}>확인</Button>
        </S.MessageWrapper>
        
        )}
        {!text && (
          <S.MessageWrapper>
          <h1>로그인에 성공했습니다.</h1>
          <h3>환영합니다 </h3>
          <Button onClick={MoveToHomeBtn}>확인</Button>
          </S.MessageWrapper>
        )}
        <div style={{marginLeft:"140px"}}>

        </div>
      </div>
    </div>
  );
};

export default Modal;