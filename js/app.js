var removeSVG = ' <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 229.604 512 566.972" enable-background="new 0 229.604 512 566.972" xml:space="preserve"><g><path class="fill" d="M197.918,600.169c16.627,11.179,36.595,17.716,58.082,17.716c57.485,0,104.242-46.772,104.242-104.247c0-21.487-6.537-41.466-17.716-58.077L197.918,600.169z M197.918,600.169"/><path class="fill" d="M256,409.38c-57.484,0-104.252,46.772-104.252,104.257c0,24.332,8.413,46.73,22.43,64.479l146.316-146.29C302.715,417.788,280.337,409.38,256,409.38L256,409.38z M256,409.38"/><path class="fill" d="M256,279.031c-129.26,0-234.057,104.797-234.057,234.052c0,129.249,104.797,234.066,234.057,234.066s234.058-104.802,234.058-234.066C490.058,383.828,385.26,279.031,256,279.031L256,279.031z M256,650.252c-75.326,0-136.614-61.293-136.614-136.614c0-75.337,61.288-136.63,136.614-136.63c75.348,0,136.614,61.293,136.614,136.63C392.614,588.959,331.348,650.252,256,650.252L256,650.252z M256,650.252"/></g></svg> ';
var completeSVG = ' <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 229.604 512 566.972" enable-background="new 0 229.604 512 566.972" xml:space="preserve"><g><path class="fill" d="M213.563,446.914c0,22.359-18.127,40.478-40.485,40.478c-22.35,0-40.469-18.119-40.469-40.478c0-22.35,18.119-40.477,40.469-40.477C195.436,406.437,213.563,424.564,213.563,446.914L213.563,446.914z M213.563,446.914"/><path class="fill" d="M379.392,446.914c0,22.359-18.118,40.478-40.47,40.478c-22.357,0-40.484-18.119-40.484-40.478c0-22.35,18.127-40.477,40.484-40.477C361.273,406.437,379.392,424.564,379.392,446.914L379.392,446.914z M379.392,446.914"/><rect x="168.787" y="581.855" fill="#67B0D1" width="174.426" height="29.071"/><path class="fill" d="M89.019,745.657h333.962c36.162,0,65.586-29.424,65.586-65.586V346.109c0-36.17-29.424-65.586-65.586-65.586H89.019c-36.171,0-65.586,29.416-65.586,65.586v333.962C23.433,716.233,52.848,745.657,89.019,745.657L89.019,745.657z M52.504,346.109c0-20.138,16.386-36.515,36.515-36.515h333.962c20.138,0,36.515,16.377,36.515,36.515v333.962c0,20.137-16.377,36.515-36.515,36.515H89.019c-20.129,0-36.515-16.378-36.515-36.515V346.109z M52.504,346.109"/></g></svg> ';

//User clicks the add button
//If there is text inside the item field add to list
document.getElementById('add').addEventListener('click', function() {
  let value = document.getElementById('item').value;
  //An empty string is always false
  if (value) {
    addItemTodo(value);
    document.getElementById('item').value = '';
}
});

function removeItem(e) {

  let item = this.parentNode.parentNode;
  let parent = this.parentNode.parentNode.parentNode;


item.parentNode.removeChild(item);

};


//Adds a new item to the todo list
function addItemTodo(text) {
  var list = document.getElementById('todo');

  let item = document.createElement('li');
  item.innerText = text;

  var icons = document.createElement('div');
  icons.classList.add('icons');

  var remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removeSVG;


//Remove click event
remove.addEventListener('click', removeItem);


  var complete = document.createElement('button');
  complete.classList.add('complete');
  complete.innerHTML = completeSVG;

icons.appendChild(remove);
icons.appendChild(complete);
item.appendChild(icons);

list.appendChild(item);

list.insertBefore(item, list.childNodes[0]);

}

/*

document.getElementById('r').addEventListener('click', function() {

console.log('remove');

});

document.getElementById('c').addEventListener('click', function() {

console.log('complete');

});

*/
