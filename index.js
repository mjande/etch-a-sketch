let rows = [];
let items = [];
let container = document.querySelector(".container");
let gridSize;

let reset = document.querySelector("#reset");
reset.addEventListener('click', () => { 
    // removal of previous squares
    let itemsAll = document.querySelectorAll(".items");
    itemsAll.forEach((item) => {
        item.remove();
    });
    let rowsAll = document.querySelectorAll(".rows");
    rowsAll.forEach((row) => {
        row.remove();
    });
    
    gridSize = prompt("How many squares per side?");
    if (gridSize > 100) {
        alert("Grid size is too large. Max input = 100");
    } else {
        
    // create rows
        for (let r = 0; r < (gridSize); r++) { 
            rows[r] = document.createElement('div');
            rows[r].classList.add(`rows`);
            container.appendChild(rows[r]);
            // create equal number of items in each row
            for (let i = 0; i < (gridSize); i++) {
                items[i] = document.createElement('div');
                items[i].classList.add("items");
                rows[r].appendChild(items[i]); 
            };
        }
    }    
    // add hover effect
    itemsAll = document.querySelectorAll(".items")
    itemsAll.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            item.classList.add("hovered");
        });
    });      
});