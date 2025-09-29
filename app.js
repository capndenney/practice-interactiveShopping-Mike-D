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

// shoppingList.addEventListener('click', function(event) {
//     if(event.target.classList.contains('edit-button')) {
//         alert('button functioning');
//         const editInput = document.createElement('input');
//         const curParent = event.target.parentElement;
//         const curEdit = curParent.getElementsByClassName('edit-button');
//         const textSpan = curParent.querySelector('span').value;

            
//             if(!(editInput.value === textSpan)) { //need to trigger on when the text is changed, not 
//                 curEdit.innerText = 'Save';
//             }
//         editInput.setAttribute('placeholder', textSpan);
//         editInput.setAttribute('id', 'edit-value');
//         editInput.setAttribute('type', 'text');


//         editInput.textContent = textSpan;
//         //need to store updated value, change value of text of curText, update edit button to "save", add button to cancel changes
//     }
// });


/*testing hidden section in HTML, using CSS styling to save edit*/ 
const addSection = document.getElementById('item-addition');
const editSection = document.getElementById('edit-selected');
const editField = document.getElementById('edit-item');

shoppingList.addEventListener('click', function(event) {
    if(event.target.classList.contains('edit-button')) {
        alert('button functioning');
        const curParent = event.target.parentElement;
        const textSpan = curParent.querySelector('span').value;
        editField.setAttribute('placeholder', textSpan.value);
        editField.textContent = textSpan;
        //update style of section editSection to be visible, and addSection to be hidden
        
        editInput.setAttribute('id', 'edit-value');
        editInput.setAttribute('type', 'text');


        // editField.textContent = textSpan;
        //need to store updated value, change value of text of curText, update edit button to "save", add button to cancel changes
    }
});