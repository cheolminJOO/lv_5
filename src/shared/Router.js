import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import MyList from '../pages/MyList'
import Home from '../pages/Home'
import DetailedPage from '../pages/DetailedPage'

export const Router = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element= {<Login/>} />
      <Route path="/signup" element= {<SignUp/>} />
      <Route path="/home" element={<Home/>}/>
      <Route path="mylist/:id" element={<DetailedPage/>}/>
    </Routes>
  </BrowserRouter>
  )
}