import { useState } from 'react'

export default function useInput() {
  const [value, setValue] = useState('')
  const handler = (event) => {
    setValue(event.target.value)
  }

  const clear = () => {
    setValue("")
  }

  return [value,handler,clear]
  
}
