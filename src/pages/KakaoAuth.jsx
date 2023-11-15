import React from 'react'

export default function KakaoAuth() {

  // const code = window.location.search;
  const code = new URL(document.location.toString()).searchParams.get('code')


  console.log("code :", code)
  return (
    <div>로딩중...</div>
  )
}
