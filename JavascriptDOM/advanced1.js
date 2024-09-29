const list = document.getElementById("list");


function addItem(e) {
    e.preventDefault();
    let item = document.getElementById("items").value;

    let listItem = document.createElement("li");
    let deleteButton = document.createElement("button");
    listItem.innerText = item;
    listItem.setAttribute("id", "item");
    deleteButton.innerText = "Delete Item";

    list.appendChild(listItem);
    listItem.appendChild(deleteButton);

    deleteButton.addEventListener('click', function () {
        list.removeChild(listItem);
        document.getElementById("items").focus();

    });
    document.getElementById("items").value = '';
    document.getElementById("items").focus();
}



document.getElementById("addItem").addEventListener('click', addItem);




