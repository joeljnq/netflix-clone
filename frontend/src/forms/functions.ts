export function checkEmail (email:string):boolean{
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function checkPassword (pwd:string):boolean{
  return pwd.length >= 4;
}