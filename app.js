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
    if(event.target.classList.contains('remove-item')) {
        let confirmed = window.confirm("This will delete your item");
        if (confirmed) {
        event.target.parentElement.remove();
        }
    }
});

shoppingList.addEventListener('click', function(event) {
    if(event.target.classList.contains('edit-button')) {
        // alert('button functioning');
        const editInput = document.createElement('input');
        const curParent = event.target.parentElement;
        const curEdit = curParent.getElementsByClassName('edit-button');
        const textSpan = curParent.querySelector('span');
        editInput.value = textSpan.textContent;
        curParent.replaceChild(editInput, textSpan);
        event.target.innerText = 'Save';
        event.target.classList.remove('edit-button');
        event.target.classList.add('save-button');
        editInput.setAttribute('id', 'edit-value');
        editInput.setAttribute('type', 'text');
        //change button to Save, show new input instead of current span, and change class of button to save-button
    }
});


shoppingList.addEventListener('click', function(event) {
    if(event.target.classList.contains('save-button')) {
        alert('button functioning');
        //need variable for edit input
        const curEdit = curParent.getElementsByClassName('save-button');
        const textSpan = curParent.querySelector('span').textContent;
        textSpan = editInput.value;
        curEdit.innerText = 'Save';
        event.target.classList.remove('save-button');
        event.target.classList.add('edit-button');
        //change button to Save, show new input instead of current span, and change class of button to save-button
    }
});