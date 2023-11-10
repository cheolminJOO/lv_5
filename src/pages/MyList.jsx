import React from 'react'
import { useSelector } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import {v4 as uuidv4} from 'uuid';


export default function MyList() {
  const songArr = useSelector((state) => state.song.songArr)
  
  console.log(songArr)
  return (
    <div>
      {songArr.map((song) => 
      <div>
        <div key={song.id}>{song.id} {song.singer} {song.songName}</div>
        <button key ={uuidv4()}>삭제하기</button>
      </div>
      
      )}
    </div>
  )
}
