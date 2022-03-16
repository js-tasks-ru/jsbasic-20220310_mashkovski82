function checkSpam(str) {
let strNew = str.toUpperCase()
 if(strNew.includes('1XBET') == true){
  return true
 } else if (strNew.includes('XXX') == true){
  return true
 } else {
  return false
}
}
checkSpam();