import * as yup from 'yup';

export const schema = yup.object({
  id : yup.string().required("아이디를 입력하세요").max(9, "9글자 이하로 입력하세요").min(4,"4글자 이상 입력하세요"),
  password : yup.string().required("비밀번호를 입력하세요").max(15, "15글자 이하로 입력하세요").min(4,"4글자 이상 입력하세요")
})
