const regex = /^[A-Z]+$/i
export function validate(input){
  return regex.test(input);
}