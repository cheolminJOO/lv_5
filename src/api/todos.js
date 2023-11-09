import axios from 'axios'
import { getCookie } from '../shared/Cookie'

export const getUserInfo = async() => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/user`, {

    headers : {
      'Authorization' : `Bearer ${getCookie('token222')}`
      //getCookie 함수를 호출해 쿠키값을 쓴다. 
    }
  })

  console.log(response.data)

  return response.data;
}

export const addNewUser = async(newUser) => {
  try{
  const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/register`,newUser)
  
  // console.log("response",response)
  return response.data;
  
  }catch(error){
    console.log(error)
    if(error.response) {
      if(error.response.status === 401) {
          if(error.response.data.message === '이미 존재하는 유저 id입니다.'){
            alert("이미 아이디가 존재합니다.")
          }
        } 
      }
    }
  }

export const checkLogin = async(toCheckId) => {
    try{
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/login`,toCheckId)
    console.log("response",response)
    return response.data.token;
    
  }catch(error){
    console.log(error)
    if(error.response){
      if(error.response.status ===401) {
        if(error.response.data.message === '비밀번호가 일치하지 않습니다.'){
          alert("비밀번호가 일치하지 않습니다.")
        }else if(error.response.data.message === '존재하지 않는 유저입니다.'){
          alert("존재하지 않는 유저입니다.")
        }
      }
    }
  }


  
}

