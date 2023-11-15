import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addSong, deleteSong } from '../redux/modules/Song';
import { addNumber } from '../redux/modules/Id';
import {v4 as uuidv4} from 'uuid';
import * as S from '../shared/Style/PlaylistStyle'
import { addImage } from '../redux/modules/Image';
import { useNavigate } from 'react-router-dom';
import {useForm} from "react-hook-form"
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup"
import { Button } from '../component/Button';

const schema = yup.object({
  songName : yup.string().required("노래제목을 입력하세요").max(10, "10자 이하 노래만 적으세요"),
  singer : yup.string().required("가수이름을 적으세요"),
  desc : yup.string().required("설명을 적으세요.").max(20, "20자 이하로 적으세요")
})


export default function Playlist() {
  const {register, handleSubmit, formState, reset} = useForm({
    resolver : yupResolver(schema),
    mode : "onChange"
  });
  const dispatch = useDispatch();
  const id = useSelector((state) => state.id)
  const songArr = useSelector((state) => state.song.songArr)
  const imageArr = useSelector((state) => state.songImage.imageArr)
  const [isActive, setIsActive] = useState(false)
  const ref = useRef(null)
  const navigate = useNavigate();

  const onClickDeleteBtn = (id) => () => {
    dispatch(deleteSong(id))
  }



  const onClickSubmitSongBtn = (data) => {
    if(!data.songName || !data.singer || !isActive  ){
      return alert("모두 입력하신 뒤 등록해주세요")
    }

    console.log("data",data)

    // if(songArr.length ===6 ) {
    //   return alert("최대 개수를 초과했습니다.")
    // }
    const newSong = {
      id : id.id,
      songName : data.songName,
      singer: data.singer,
      desc : data.desc,
    }
    dispatch(addNumber()) // 이거 안 하면 숫자 증가 안함 !
    dispatch(addSong(newSong))
    setIsActive(false)
    reset();
  }

  const onChangeImage = (event) => {
    const file = event.target.files?.[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = (event) => {
      if (typeof event.target?.result ==="string") {
        dispatch(addImage(event.target?.result))
      }
    }
    setIsActive(true)
  }


  const onClickImageBtn = () => {
    ref.current.click()
  }

  const onClickMoreInfo = (id) => () => {
    navigate(`/mylist/${id}`)
  }




  return (
    <S.WrapperOfWrapper>
      <S.BodyWrapper>
          <S.InputWrapper>
            <h2>Make your Playlist</h2>
            <S.FormStyle style = {{height : "700px"}}onSubmit={handleSubmit(onClickSubmitSongBtn)}>
              <div>
                <S.InputStyle placeholder='please write singer name'  type='text' defaultValue={""} {...register("singer")} />
                <S.ErrorMessageStyle>{formState.errors.singer?.message}</S.ErrorMessageStyle>
              </div>
              <div>
                <S.InputStyle placeholder='please write song name' type='text' {...register("songName")} />
                <S.ErrorMessageStyle>{formState.errors.songName?.message}</S.ErrorMessageStyle>
              </div>
              <div>
                <div>song image url</div>
                <Button type='button' onClick={onClickImageBtn}>이미지 업로드</Button> 
                {/* 버튼이란 버튼은 전부 onClickSubmitSongBtn을 실행시키네,, submit은 저기 onSubmit 함수 실행시키고 button은 이 버튼의 함수를 실행시킨다 .  */}
                <S.HiddenInputStyle ref={ref} onChange={onChangeImage} type='file' />
              </div>
              <div>
                <div>Image Preview</div>
                {isActive && (
                  <S.ImagePreviewStyle src={imageArr[id.id]} alt='액박'/>
                )}
                {!isActive && (
                  <S.ImagePreviewBox></S.ImagePreviewBox>
                )}
              </div>
              <div>
              <S.DescriptionStyle placeholder='please writhe description' {...register("desc")}  ></S.DescriptionStyle>
                <S.ErrorMessageStyle>{formState.errors.desc?.message}</S.ErrorMessageStyle>
              </div>
              <Button style={{backgroundColor : formState.isValid ? "black" : "", color : formState.isValid ? "white" : ""}} type='submit'>등록하기</Button>
            </S.FormStyle>
          </S.InputWrapper>
        <div>
          <h2>My playlist</h2>
            <S.SongWrapper>
              {songArr.map((song,index) => 
              <S.SongCard key={uuidv4()}>
                 <label>{song.id +1}</label>
                <S.ImageStyle src={imageArr[song.id]} alt='엑박'/>
                <label>SONG NAME</label><S.SongNameStyle key={uuidv4()}>{song.songName}</S.SongNameStyle>
                <label>SINGER</label><S.SongNameStyle key={uuidv4()}>{song.singer}</S.SongNameStyle>
                <S.ButtonStyleWrapper>
                  <Button onClick={onClickDeleteBtn(song.id)}>삭제하기</Button>
                  <Button backgroundColor = "rgb(224, 244, 255)" hoverColor = "rgb(135, 196, 255)" onClick={onClickMoreInfo(song.id)}>더보기</Button>
                </S.ButtonStyleWrapper>
              </S.SongCard>
              )}
            </S.SongWrapper>
        </div>
      </S.BodyWrapper>
    </S.WrapperOfWrapper>
  )
}
