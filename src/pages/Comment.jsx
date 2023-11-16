import React, { useState } from 'react'
import * as S from '../shared/Style/MylistStyle'
import { getDate } from '../utills/Date';
import { FaRegTrashCan } from "react-icons/fa6";
import { MdCancelPresentation } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { useMutation, useQueryClient } from 'react-query';
import { deleteComment, editComment } from '../api/PlaylistCrud';

export default function Comment(props) {
  const [editContent, setEditContent] = useState('')
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [isEdit, setIsEdit] = useState(false)
  const [isEditClicked, setIsEditClicked] = useState(false)
  const [isDeleteClicked, setIsDeleteClicked] = useState(false)
  const [updatedText, setUpdatedText] = useState('');

  const queryClient = useQueryClient();

  const deleteMutation = useMutation(deleteComment,{
    onSuccess : () => {
      queryClient.invalidateQueries("comment")
    }
  })

  const editMutation = useMutation(editComment, {
    onSuccess : () => {
      queryClient.invalidateQueries("comment")
    }
  })

  const onClickisEdit = ()  => {
    setIsEditClicked(true)
  }

  const onClickisEditCancel = ()  => {
    setIsEditClicked(false)
  }

  const onClickisDeleteCance = () => {
    setIsDeleteClicked(false)
  }

  const onChangeEditComment = (event) => {
    setEditContent(event.target.value)
  }


  const onClickCheck = () => {
    setIsDeleteClicked((prev) => !prev)
  }

  const onClickDeleteComment = (id) => () => {
    deleteMutation.mutate(id)
  }

  const onClickEditComment = (id) => () => {
    if (updatedText === '') {
      setIsEditClicked(false);
      return alert("수정할 내용이 없습니다.")
    }
    editMutation.mutate({id,updatedText})
    setUpdatedText("")
    setIsEditClicked(false);
    
  }

  const onChangeUpdatedComment = (event) => {
    setUpdatedText(event.target.value)
  }
  

  return (
    <S.CommentWrapper> 
    <S.InputResult>
     {isEditClicked ? (
      <S.UpdateInputWrapper>
        <S.UpdateInput
        value={updatedText}
        onChange={onChangeUpdatedComment}/>
      </S.UpdateInputWrapper>
     ):(
      <div>
        <S.InputWidth>{props.comment.comment}</S.InputWidth>
      </div>
     )
    }

      {(isEditClicked && !isDeleteClicked) ? (
        <div>
        <MdCancelPresentation size={"30"} onClick={onClickisEditCancel}/>
        
        <GiConfirmed size={"30"} onClick={onClickEditComment(props.comment.id)}/>
      </div>
      ) : ((!isEditClicked && isDeleteClicked) ? (
        <div>
        <MdCancelPresentation size={"30"} onClick={onClickisDeleteCance}/>
        
        <GiConfirmed size={"30"} onClick={onClickDeleteComment(props.comment.id)}/>
      </div>
      ): (  
        <div>
          <FaEdit size={"30"} onClick={onClickisEdit}/>
          <FaRegTrashCan size={"30"} onClick={onClickCheck} />
        </div>
      ))}

    </S.InputResult>
      <div>
        {getDate()}
      </div>

    {editingCommentId === props.comment.id && (
      <div>
      {isEdit === true && (
    <div>
      <S.InputStyle value={editContent} onChange={onChangeEditComment} />
  
    </div>
    )}
    </div>
     )}
  </S.CommentWrapper>
  )
}
