import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Mypage from '../pages/Mypage'
import MyList from '../pages/MyList'
import Home from '../pages/Home'

export const Router = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element= {<Login/>} />
      <Route path="/signup" element= {<SignUp/>} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/mypage" element={<Mypage/>}/>
      <Route path="/mylist" element={<MyList/>}/>
    </Routes>
  </BrowserRouter>
  )
}