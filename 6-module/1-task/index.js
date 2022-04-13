/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
  export default class UserTable {
    constructor(rows) {
      this.rows = rows;
      this.render();
    }
    render () {
      this.elem = document.createElement('table');
      const newCall = this.rows.map(item => {
        return `<thead><tr><th><span>${item}</span></th></tr></thead>`
      }).join('');
      const newRows = this.rows.map(item => {
        return `<tr class="row">
          <td>${item.name}</td>
          <td>${item.age}</td>
          <td>${item.salary}</td>
          <td>${item.city}</td>
          <td><button class="btn">X</button></td></tr>`
      }).join('');
      // const tableGrid = `<table>${newCall}\n${newRows}</table>`;
      // el.insertAdjacentHTML('beforeend', tableGrid);
      this.elem.innerHTML = newCall + newRows;
      this.elem.addEventListener('click', event => {
        if (event.target.className != 'btn') return;
        let rowDelete = event.target.closest('.row');
        rowDelete.remove();
      });
  
    }
  }