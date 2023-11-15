import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'
import DetailedPage from '../pages/DetailedPage'
import KaKaoLoginTest from '../pages/KaKaoLoginTest'
import KakaoAuth from '../pages/KakaoAuth'

export const Router = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element= {<Login/>} />
      <Route path="/signup" element= {<SignUp/>} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/mypage" element={<KaKaoLoginTest/>}/>
      <Route path="mylist/:id" element={<DetailedPage/>}/>
      <Route path="/auth" element={<KakaoAuth/>}/>
    </Routes>
  </BrowserRouter>
  )
}