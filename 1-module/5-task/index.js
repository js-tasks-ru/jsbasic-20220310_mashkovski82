function truncate(str, maxlength) {
  let strNew;
  if(str.length > maxlength) {
  strNew = str.slice(0, maxlength - 1) + '\u2026';
 return strNew; 
  } else {
  return str;
  }
}
truncate();