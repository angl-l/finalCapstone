function displaySavedItems() {
    // Get the saved items from local storage
    let savedItems = localStorage.getItem("savedItems");
    savedItems = JSON.parse(savedItems);
    console.log(savedItems);
    // Clear the saved items list
    let savedItemsList;
    savedItemsList = document.getElementById("savedList");
    savedItemsList.innerHTML = "";

    // Add each saved item to the list
    savedItems.forEach((item) => {
        const savedItem = document.createElement("p");
        savedItem.innerText = item;
        savedItemsList.appendChild(savedItem);
    });
}


