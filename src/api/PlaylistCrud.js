import axios from 'axios'

export const AddComment = async(newComment) => {
  try{
  const response = await axios.post(`${process.env.REACT_APP_SONGS}/comments`,newComment)
  return response.data

  }catch(error){
    if(error.response) {
      if(error.response.status ===500) {
        alert(error.response.data.message)
      }
    }
  }
}


export const getComment = async() => {
  try{
    const response = await axios.get(`${process.env.REACT_APP_SONGS}/comments`)
    return response.data
  }catch(error) {
    if(error.response){
      alert(error.response.data.message)
    }
  }
}


export const deleteComment = async(targetId) => {
  try{
    const response = await axios.delete(`${process.env.REACT_APP_SONGS}/comments/${targetId}`)
    return response.data
    
  }catch(error) {
    if(error.response){
      alert(error.response.data.message)
    }
  }
}

export const editComment = async(target) =>  {

  try{
    const response = await axios.patch(`${process.env.REACT_APP_SONGS}/comments/${target.id}`, {
      comment : target.editContent  })
    return response.data
    
  }catch(error){
    if(error.response){
      alert(error.response.data.message)
    }

  }
}

