import React, { useState } from 'react'
import {  useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { AddComment, getComment } from '../api/PlaylistCrud';
import * as S from '../shared/Style/MylistStyle'
import { Button } from '../component/Button';
import Comment from './Comment';

export default function MyList() {
  const queryClient = useQueryClient();
  const mutation = useMutation(AddComment, {
    onSuccess : () => {
      queryClient.invalidateQueries("comment") //리패치 용도
      //이거 설정 안 하면, 새로고침 해야 새로운 정보 등록됨
    },
  })

  const response = useQuery("comment", getComment)
  const res = response.data

  const songArr = useSelector((state) => state.song.songArr)
  const imageArr = useSelector((state) => state.songImage.imageArr)
  const [comment, setComment] = useState('')
  const params = useParams()
  const detailedInfo = songArr.find((song) => song.id === parseInt(params.id))
  const onChangeComment = (event) => {

    setComment(event.target.value)
  
  }


  console.log("안녕")
  console.log("params")

  const onClickComment = () => {
    if(!comment) return alert("아무것도 입력이 안 됐습니다. 다시 확인해주세요")
    const newComment = {
      comment : comment
    }
    mutation.mutate(newComment)
    setComment("")

  }
  

 
 

  return (
    <S.BigWrapper>
      <S.Wrapper>
        <S.InfoWrapper>
          <h2>Music Information</h2>
          <S.PictureSize src={imageArr[params.id]} alt='엑박'/>
          노래제목 : {detailedInfo.songName}<br/>
          가수 : {detailedInfo.singer}<br/>
          느낀점 : {detailedInfo.desc}
        </S.InfoWrapper>
          
        <S.WrapperComment>
          <S.MakeCommentBox>
          <label>댓글</label>
          <S.InputStyle maxLength={8} value={comment} type='text' onChange={onChangeComment} />
          <Button backgroundColor = "rgb(0, 169, 255)" hoverColor = "rgb(205, 245, 253)" onClick={onClickComment}>댓글달기</Button>
          </S.MakeCommentBox>
          {res?.map((comment) => 
          <Comment comment={comment} 
          />
        )}
        </S.WrapperComment>
        </S.Wrapper>
    </S.BigWrapper>
      
  )
}
