function makeDiagonalRed(table, result) {
 
  for (let i = 0; i < table.rows.length; i++) {
    result =  table.rows[i].cells[i].style.backgroundColor = 'red';
  }
  
}
