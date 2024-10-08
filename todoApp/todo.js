function addTask() {
    const task = document.getElementById("todoInput").value;
    document.getElementById("todoInput").value = "";
    const ul = document.getElementById("todoList");

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const delbtn = document.createElement("button");
    delbtn.textContent = "Delete";
    delbtn.classList.add("deleteBtn"); 

   
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(" " + task));
    li.appendChild(delbtn);
    ul.appendChild(li);


    delbtn.addEventListener("click", function() {
        ul.removeChild(li);
    });
}

const btn = document.getElementById("addBtn");
btn.addEventListener("click", addTask);
