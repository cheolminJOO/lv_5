import React from 'react'

export default function KakaoAuth() {


//uri =
// http://localhost:3000/auth?code=s2AETb2BId72p83fPTfpHlE-G4KbyOsJvTQjmTmHU3tLERH65jbP29m0XnsKPXLrAAABi9LyM6_okopMIboAuA
  // const code = window.location.search;
  const code = new URL(document.location.toString()).searchParams.get('code')


  console.log("code :", code)
  return (
    <div>로딩중...</div>
  )
}
