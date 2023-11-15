import React from 'react'

export default function KaKaoLoginTest() {

  const KAKAO_REST_API_KEY = "2a4cb3ab3600de4e8a7e4a87ad5a6504"
  const KAKAO_REDIRECT_URI = "http://localhost:3000/auth"

    const onKakaoSocialLogin = () => {
        window.location.href=`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}`;
    }
  return (
    <div>
      <button onClick={onKakaoSocialLogin}>로그인 하기</button>
    </div>
  )
}
