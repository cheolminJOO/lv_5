import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addIdNumber, addSong, deleteSong } from '../redux/modules/Song';
import { addNumber } from '../redux/modules/Id';
import {v4 as uuidv4} from 'uuid';
import * as S from '../shared/Playlist'
import { addImage } from '../redux/modules/Image';

export default function Playlist() {
  const [songName,setSongName] = useState('')
  const [singer,setSinger] = useState('')
  const dispatch = useDispatch();
  const id = useSelector((state) => state.id)
  const songArr = useSelector((state) => state.song.songArr)
  const imageArr = useSelector((state) => state.songImage.imageArr)
  const [isActive, setIsActive] = useState(false)
  const ref = useRef(null)

  console.log("imageArr",imageArr[0])





  const onChangeSongName = (event) => {
    setSongName(event.target.value)
  }

  const onChangeSinger = (event) => {
    setSinger(event.target.value)
  }

  const onClickDeleteBtn = (id) => () => {
    dispatch(deleteSong(id))
  }


  const onClickSubmitSongBtn = () => {
    if(!songName || !singer || !isActive  ){
      return alert("모두 입력하신 뒤 등록해주세요")
    }

    // if(songArr.length ===6 ) {
    //   return alert("최대 개수를 초과했습니다.")
    // }
    const newSong = {
      id : id.id,
      songName,
      singer,
    }
    dispatch(addNumber()) // 이거 안 하면 숫자 증가 안함 !
    dispatch(addSong(newSong))
    setSongName('')
    setSinger('')
    setIsActive(false)
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


  return (
    <S.WrapperOfWrapper>
      <S.BodyWrapper>
        <div>
          <S.InputWrapper>
            <div>
            <p>singer</p>
              <S.InputStyle value={singer} onChange={onChangeSinger} type='text' />
            </div>
            <div>
              <div>song name</div>
              <S.InputStyle value={songName} onChange={onChangeSongName} type='text' />
            </div>
            <div>
              <div>song image url</div>
              <S.ImageUploadBtn onClick={onClickImageBtn}>이미지 업로드</S.ImageUploadBtn>
              <S.HiddenInputStyle ref={ref} onChange={onChangeImage} type='file' />
            </div>
            <div>
              <div>Image Preview</div>
              {isActive && (
                <img src={imageArr[id.id]} alt='액박'/>
              )}
              {!isActive && (
                <div></div>
              )}
            </div>
            <button onClick={onClickSubmitSongBtn}>등록하기</button>
          </S.InputWrapper>
        </div>
        <div>
          <div>my playlist</div>
            <S.SongWrapper>
              {songArr.map((song,index) => 
              <S.SongCard key={uuidv4()}>
                 <label>{song.id +1}</label>
                <S.ImageStyle src={imageArr[song.id]} alt='엑박'/>
                <label>SONG NAME</label><S.SongNameStyle key={uuidv4()}>{song.songName}</S.SongNameStyle>
                <label>SINGER</label><div key={uuidv4()}>{song.singer}</div>
                <button onClick={onClickDeleteBtn(song.id)}>삭제하기</button>
              </S.SongCard>
              )}
            </S.SongWrapper>
        </div>
      </S.BodyWrapper>
    </S.WrapperOfWrapper>
  )
}
