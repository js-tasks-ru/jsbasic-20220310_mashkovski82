function getMinMax(str) {
 let arrNumberString = str.split(' ');
 let arrNumber = [];
 let objMinMax = {};
  for (let num of arrNumberString) {
    num = Number(num);
      if (isFinite(num) == true) {
        arrNumber.push(num);
      }
      objMinMax.min = Math.min(...arrNumber);
      objMinMax.max = Math.max(...arrNumber);
 }
      return objMinMax;
}
