import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import {v4 as uuidv4} from 'uuid';
import { getUserInfo } from '../api/todos';
import { useQuery } from 'react-query';


export default function MyList() {
  const {isLoading, isError, data} = useQuery("user", getUserInfo)
  const songArr = useSelector((state) => state.song.songArr)
  const imageArr = useSelector((state) => state.songImage.imageArr)
  
  const [comment,setComment] = useState([])
  const id = useSelector((state) => state.id)
  const [isActive,setIsActive] = useState(false)
  console.log(songArr)
  console.log("imageArr",imageArr)
  console.log(id)
  const params = useParams()

  const detailedInfo = songArr.find((song) => song.id === parseInt(params.id))
  if(isLoading) {
    <h1>로딩중입니다.</h1>
  }
  if(isError){
    <h1>문제가 발생했습니다.</h1>
  }

  console.log("detailedinfo",detailedInfo)
  
  console.log("params",params)
  console.log("안녕 여긴 mylist")

  const onChangeComment = (event) => {
    const newComment = event.target.value
    setComment([...comment,newComment])
  }

  console.log(comment)

  const onClickComment = () => {
    setIsActive(true)
  }
  return (
    <div>
      <div>
        <div>
        {detailedInfo.id + 1}<br/>
        {detailedInfo.songName}<br/>
        {detailedInfo.singer}<br/>
        {detailedInfo.desc}
        <img src={imageArr[id.id -1]} alt='엑박'/>
        </div>
        <label>댓글</label><input type='text' onChange={onChangeComment} value={comment}/>
        <button onClick={onClickComment}>댓글달기</button>
        {isActive && (
          <div>{comment}</div>
        )}
      </div>
    </div>
      
  )
}
