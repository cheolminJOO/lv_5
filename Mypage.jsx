import React from 'react'
import { useQuery } from 'react-query'
import { getUserInfo } from '../api/todos'

export default function Mypage() {
  const {isLoading, isError, data} = useQuery("user", getUserInfo)

  return (
    <div>Mypage</div>
  )
}
