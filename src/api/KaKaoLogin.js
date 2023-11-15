import axios from "axios"

export const KakaoLogin = async() => {
  const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY
  const KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI
  try{
  const response = await axios.get(`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}`)
  console.log("response",response)
  return response
}catch(error) {
  alert("에러입니다.")
}
  
}

