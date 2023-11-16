
//1. 스페이스바 공백처리
export const delSpace = (data) => {
  return data.replace(/\s/g, "");
};

//2. 암호, 최소8글자, 특수문자 하나, 숫자 하나
export const passwordTest = (data) => {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/g.test(data);
};

//2. 
export const emailTest = (data) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(data);
};

//4. 금액 3자리마다 콤마, 찍어주기
const NumberWithComma = (data) => {
  return String(data).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};