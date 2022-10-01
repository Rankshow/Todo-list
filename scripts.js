const inputDetail = document.querySelector('#inputUser');
const btnAddition = document.querySelector('.btnAdd');
const btnDelete = document.querySelector('.btnremove');
const lists = document.querySelector('.items');
const clock = document.querySelector('.date');

// Adding some functionality to the list
const display = function(e){
    e.preventDefault(e)
//  Add some item
const addList = document.createElement('ul');
addList.textContent = inputDetail.value;
   lists.append(addList);
    inputDetail.value = '';
}
btnAddition.addEventListener('click', display);

// Delet all items
const deleteItem = function(e){
    e.preventDefault(e);
    lists.remove();
}
btnDelete.addEventListener('click', deleteItem);

// date
const todaysDate = new Date();
const day = `${todaysDate.getDate()}`.padStart(2, 0 );
const month = `${todaysDate.getMonth() + 1}`.padStart(2, 0);
const year = todaysDate.getFullYear();
const hours = todaysDate.getHours();
const minutes = todaysDate.getMinutes();
const milisec = todaysDate.getMilliseconds();
const addAll = `Date ${day}/${month}/${year}  Time ${hours}:${minutes}:${milisec}`;

const addDate = function (){
    const html = `<div class="date">${addAll}</div>`;
    clock.insertAdjacentHTML('beforeend', html);
};
addDate();

