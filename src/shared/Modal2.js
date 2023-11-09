import React from 'react';
import '../shared/FirstModal.css';
import { useNavigate } from 'react-router-dom';


const Modal2 = ({ onClickCloseModal }) => {
  const navigate = useNavigate();

  const onClickOkayBtn = () => {
    navigate('/home')
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>이미 로그인이 됐습니다.</h2>
        <p>홈 화면으로 돌아가겠습니다. </p>
        <div style={{marginLeft:"140px"}}>
        <button color = "white" onClick={onClickOkayBtn}>확인</button>
        </div>
      </div>
    </div>
  );
};

export default Modal2;