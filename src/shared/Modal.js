import React from 'react';
import '../shared/FirstModal.css';
import { useNavigate } from 'react-router-dom';
import {useCookies} from 'react-cookie'


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
        <>
        <h2>회원가입에 성공했습니다.</h2>
        <button color = "white" onClick={MoveToLandingPage}>확인</button>
        </>
        
        )}
        {!text && (
          <>
          <h2>로그인에 성공했습니다.</h2>
          <button color = "white" onClick={MoveToHomeBtn}>확인</button>
          </>
        )}
        <p>환영합니다 </p>
        <div style={{marginLeft:"140px"}}>

        </div>
      </div>
    </div>
  );
};

export default Modal;