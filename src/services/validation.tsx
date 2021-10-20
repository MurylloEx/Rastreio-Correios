export function validateCode(code: string){
  let codeObj = new RegExp(/^[A-Z]{2}[0-9A-Z]{11,13}$/i);
  return codeObj.test(code);
}