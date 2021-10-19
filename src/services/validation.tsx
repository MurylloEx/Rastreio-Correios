export function validateCode(code: string){
  let codeObj = new RegExp(/^[A-Z]{2}\d{9}[A-Z]{2}$/i);
  return codeObj.test(code);
}