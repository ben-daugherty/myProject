var removeSVG = ' <svg class="expand" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  x="0px" y="0px" width="50px" height="50px"  viewBox="0 229.604 512 566.972" enable-background="new 0 229.604 512 566.972" xml:space="preserve"><g><path class="fill" d="M197.918,600.169c16.627,11.179,36.595,17.716,58.082,17.716c57.485,0,104.242-46.772,104.242-104.247c0-21.487-6.537-41.466-17.716-58.077L197.918,600.169z M197.918,600.169"/><path class="fill" d="M256,409.38c-57.484,0-104.252,46.772-104.252,104.257c0,24.332,8.413,46.73,22.43,64.479l146.316-146.29C302.715,417.788,280.337,409.38,256,409.38L256,409.38z M256,409.38"/><path class="fill" d="M256,279.031c-129.26,0-234.057,104.797-234.057,234.052c0,129.249,104.797,234.066,234.057,234.066s234.058-104.802,234.058-234.066C490.058,383.828,385.26,279.031,256,279.031L256,279.031z M256,650.252c-75.326,0-136.614-61.293-136.614-136.614c0-75.337,61.288-136.63,136.614-136.63c75.348,0,136.614,61.293,136.614,136.63C392.614,588.959,331.348,650.252,256,650.252L256,650.252z M256,650.252"/></g></svg> ';
var moveUpSVG = ' <svg width="284.93px" height="284.93px" enable-background="new 0 0 284.929 284.929" version="1.1" viewBox="0 0 284.929 284.929" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m282.08 195.28l-133.05-133.04c-1.901-1.903-4.088-2.856-6.562-2.856s-4.665 0.953-6.567 2.856l-133.04 133.04c-1.906 1.906-2.856 4.093-2.856 6.568 0 2.474 0.953 4.664 2.856 6.566l14.272 14.271c1.903 1.903 4.093 2.854 6.567 2.854s4.664-0.951 6.567-2.854l112.2-112.2 112.21 112.21c1.902 1.903 4.093 2.848 6.563 2.848 2.478 0 4.668-0.951 6.57-2.848l14.274-14.277c1.902-1.902 2.847-4.093 2.847-6.566 1e-3 -2.476-0.944-4.666-2.846-6.569z"/></svg> ';
var moveDownSVG = ' <svg width="284.93px" height="284.93px" enable-background="new 0 0 284.929 284.929" version="1.1" viewBox="0 0 284.929 284.929" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m282.08 76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856-2.471 0-4.661 0.95-6.563 2.856l-112.21 112.2-112.2-112.2c-1.903-1.906-4.093-2.856-6.567-2.856-2.475 0-4.665 0.95-6.567 2.856l-14.272 14.274c-1.906 1.902-2.856 4.092-2.856 6.567 0 2.473 0.953 4.663 2.856 6.565l133.04 133.05c1.902 1.903 4.093 2.854 6.567 2.854s4.661-0.951 6.562-2.854l133.05-133.05c1.902-1.903 2.847-4.093 2.847-6.565 0-2.475-0.945-4.665-2.847-6.571z"/></svg>';

//User clicks the add button
//If there is text inside the item field add to list
const addItem = document.getElementById('add');
const listUl = document.getElementById('todo');


addItem.addEventListener('click', () => {
  let value = document.getElementById('item').value;
  //An empty string is always false
  if (value) {
    addItemTodo(value);
    value.value = '';
}
});

//Remove Function
function removeItem() {
if (this.tagName == 'BUTTON') {
if (this.className == 'remove') {
  let item = this.parentNode.parentNode;
  let parent = item.parentNode;
  parent.removeChild(item);
}
}
};
//Reorder Function
function moveUpItem() {
    let item = this.parentNode.parentNode;
    var parent = item.parentNode;
    let up = item.previousElementSibling;

    if (up) {
        parent.insertBefore(item, up);
    }


};

function moveDownItem() {
  let item = this.parentNode.parentNode;
  var parent = item.parentNode;
  let down = item.nextElementSibling;

  if (down) {
      parent.insertBefore(down, item);
  }
};

//Adds a new item to the todo list with generated html and assigns classes
function addItemTodo(text) {
  var list = document.getElementById('todo');

  let item = document.createElement('li');
  item.innerText = text;

  var icons = document.createElement('div');
  icons.classList.add('icons');

  var remove = document.createElement('button');
  remove.classList.add('remove');

  remove.innerHTML = removeSVG;

  var moveUp = document.createElement('button');
  moveUp.classList.add('moveUp');

  moveUp.innerHTML = moveUpSVG;

  var moveDown = document.createElement('button');
  moveDown.classList.add('moveDown');

  moveDown.innerHTML = moveDownSVG;

//Remove click event
remove.addEventListener('click', removeItem);

var complete = document.createElement('button');
  complete.classList.add('moveUp');
  complete.classList.add('moveDown');
  complete.innerHTML = moveUpSVG;
  complete.innerHTML = moveDownSVG;

//reordering
moveUp.addEventListener('click', moveUpItem);
moveDown.addEventListener('click', moveDownItem);


icons.appendChild(remove);
icons.appendChild(moveUp);
icons.appendChild(moveDown);
item.appendChild(icons);

//input text to be inserted
list.appendChild(item);
};
