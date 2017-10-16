

//User clicks the add button
//If there is text inside the item field add to list
document.getElementById('add').addEventListener('click', function() {
  let value = document.getElementById('item').value;
  //An empty string is always false
  if (value) {
      console.log('Ein value');
  }

});
