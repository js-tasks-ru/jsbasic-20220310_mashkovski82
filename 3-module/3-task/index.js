function camelize(str, arr) {
  arr = str.split('-');
  if(arr[0] === '') {
    str = arr.splice(0, 1);
    arr = arr.map(item => item[0].toUpperCase() + item.slice(1));
    arr = arr.join('');
  } else {
    arr = arr.map(item => item[0].toUpperCase() + item.slice(1));
    arr = arr.join('');
    arr = arr[0].toLowerCase() + arr.slice(1);
  }
  
  return arr;
}
