import React from 'react'
import { getCookie } from './Cookie'
import Modal2 from './Modal/Modal2'
import { Portal } from 'react-portal'

export default function Auth() {

  const tokenCheck = getCookie("token")

  return (
    <div>
      {tokenCheck && (
        <Portal node = {document && document.getElementById('modal-root')}>
         <Modal2/>
       </Portal>
      )}
    </div>
  )
}
