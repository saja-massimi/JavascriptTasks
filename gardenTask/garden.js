let tableHeader = document.getElementById("headCon");
let tableBody = document.getElementById("bodCon");
let tableFooter = document.getElementById("tfoCon");
let form = document.getElementById("formGarden");
let items = [];


function addHeader() {

    let headerRow = document.createElement("tr");

    let title1 = document.createElement("td");
    title1.innerHTML = "Image";
    let title2 = document.createElement("td");
    title2.innerHTML = "Name";
    let title3 = document.createElement("td");
    title3.innerHTML = "Season";

    headerRow.append(title1, title2, title3);
    tableHeader.append(headerRow);

}

function item(itemImg, itemName, itemSeason) {
    this.itemImg = itemImg;
    this.itemName = itemName;
    this.itemSeason = itemSeason;

    items.push(this);
    localStorage.setItem("flowers", JSON.stringify(items));

}


addHeader();
function addItem(e) {
    e.preventDefault();
    const itemName = e.target.nameInp.value;
    const itemImg = e.taget.selImg.value;
    const itemSeason = e.target.sesonInp.value;

    new item(itemName, itemImg, itemSeason);



}
form.addEventListener('submit', addItem);

function renderItems() {
    tableBody.innerHTML = '';
    let arr = JSON.parse(localStorage.getItem("flowers"));

    for (let i = 0; i < employee_array.length; i++) {


        let row = document.createElement("tr");
        tableBody.appendChild(row);

        let delElement = document.createElement("td");
        delElement.innerHTML = "<span id='deleteEl'>X</span>"
        row.appendChild(delElement);

        let itemImg = document.createElement("td");
        itemImg.innerHTML = "<img src='" + arr[i].itemImg + "png' /s>";
        row.appendChild(itemImg);

        let itemSeason = document.createElement("p");
        itemSeason.innerHTML = arr[i].itemSeason;
        row.append(itemSeason);

        let editButton = document.createElement("button");


    }
}

renderItems();


