const editButton = document.getElementsByClassName('edit-item');
const removeButton = document.getElementsByClassName('remove-item');
const newListItem = document.getElementById('new-item');
const shoppingList = document.getElementById('to-do-list');
const addButton = document.getElementById('add-item');

addButton.addEventListener('click', function() {
    if (newListItem.value) {
        let inputText = newListItem.value;
        appendList(inputText);
        // alert("Item added");
        newListItem.value = '';
    }
});

function appendList (listText) {
    const li = document.createElement('li');
    const newSpan = document.createElement('span');
        newSpan.textContent = listText;
    const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('remove-item');
        deleteBtn.innerText = 'Remove'
    const edit = document.createElement('button');
        edit.innerText = 'Edit'
        edit.classList.add('edit-button');
    li.classList.add('shopping-list');
    li.appendChild(newSpan);
    li.appendChild(edit);
    li.appendChild(deleteBtn);
    shoppingList.appendChild(li);
}


shoppingList.addEventListener('click', function(event) {
    if(event.target.className === 'remove-item') {
        let confirmed = window.confirm("This will delete your item");
        if (confirmed) {
        event.target.parentElement.remove();
        }
    }
});

// function confirm() {
//             let userConfirmed = confirm("This will delete your item?");

//             if (userConfirmed) {
//                 document.getElementById("result").innerText = "User clicked OK.";
//                 // Perform actions if user clicked OK
//             } else {
//                 document.getElementById("result").innerText = "User clicked Cancel.";
//                 // Perform actions if user clicked Cancel
//             }
//         }
