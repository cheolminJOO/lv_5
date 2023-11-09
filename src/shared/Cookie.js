import {Cookies} from 'react-cookie'

const cookies = new Cookies();
 
  export const setCookie = (name, value, options) => {
    return cookies.set(name, value, {...options})
  } // 쿠키 저장하는 함수 
  //setCookie("쿠키이름", 값, {path : "/"(아무데서나 사용가능), secure : true, sameSite: "none"})

  export const getCookie = (name) => {
    return cookies.get(name)
  } //쿠키 사용하는 함수  getCookies("쿠키 이름")
    
  export const removeCookie = (cookie) => {
    return cookies.remove(cookie)
  }


 
