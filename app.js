const editButton = document.getElementsByClassName('edit-item');
const removeButton = document.getElementsByClassName('remove-item');
const newListItem = document.getElementById('new-item');
const shoppingList = document.getElementById('to-do-list');
const addButton = document.getElementById('add-item');

class ShoppingItem {
    constructor()
}

addButton.addEventListener('click', function() {
    let inputText = newListItem.value;
    appendList(inputText);
    alert("Item added");
    newListItem.value = '';
});

function appendList (listText) {
    shoppingList.appendChild(document.createElement(
        'li'))
        
}

// addButton.addEventListener('click', function(event) {
//     if(event.target.tagName === 'li') {
//         addButton.classList.add('list-item')
//         //need to define the HTML structure of the item we are 
//     }
// });


