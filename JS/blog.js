// the following code manipulates the elements in a blog page so the user is able to interact with it


// retrieve input value, store it and display it as a comment
function updateComments(btn) {

    console.log('updateComments, button: ', btn, 'input value: ', btn.previousElementSibling.value, 'list: ', btn.parentElement.previousElementSibling)

    // get UL element..
    const list = btn.parentElement.previousElementSibling.firstElementChild;

    let li = document.createElement("li");
    let text = document.createTextNode(btn.previousElementSibling.value);
    li.appendChild(text);
    list.appendChild(li);

    // reset input
    btn.previousElementSibling.value = '';
}

// trigger click event once enter is pressed in input box
let input = document.querySelectorAll('#commentBox');
for(i = 0; i < input.length; i++){
    input[i].addEventListener('keyup', (e) =>{
        if(e.keyCode == 13){
             document.getElementById('post').click();
        }
    })

}


// change like button to 'liked' once clicked
let likeButtons = document.querySelectorAll('.like');
function updateLike (){
    likeButtons.forEach(function (btn){
        btn.addEventListener("click",function(){
            btn.innerHTML = "LIKED";
            btn.className = "liked";
        });

    });

}


function saveForLater(blog) {
    let savedItems = getSavedItems();
    // Get the item that the user wants to save
    const item = document.getElementById(blog).innerText;
    console.log(item.innerText);

    // Save the item to local storage
    savedItems.push(item);
    console.log(savedItems);
    console.log(JSON.stringify(savedItems));
    localStorage.setItem("savedItems", JSON.stringify(savedItems));
    savedItems = localStorage.getItem("savedItems");
    
    
    console.log(savedItems);

    // Update the number of saved items in the alert
    updateSavedItemsCount();
    updateSave();
}

function getSavedItems() {
    // Get the saved items from local storage
    const savedItems = localStorage.getItem("savedItems");

    // If there are no saved items, return an empty array
    if (!savedItems) {
        return [];
    }

    // Otherwise, parse the saved items from JSON and return them
    return JSON.parse(savedItems);

}

function updateSavedItemsCount() {
    // Get the number of saved items
    const savedItems = getSavedItems();
    const savedItemsCount = savedItems.length;

    // Show an alert with the number of saved items
    alert(`You have ${savedItemsCount} item(s) saved for later.`);
}

// change saved button to "saved" once clicked
function updateSave (){
    let saveButtons = document.querySelectorAll('.save');
    saveButtons.forEach(function (btn){
        btn.addEventListener("click",function(){
            btn.innerHTML = "SAVED";
            btn.className = "saved";
        });

    });

}