// intialize variables
const btn1 = document.querySelector('#btn-add');
const form = document.getElementById("container");
const bookList = document.getElementById("book-list");
let columnPlacement = 0;
let rowPlacement = 1;

// open form
function openForm() {
    form.style.display = "block";
}
 
// close form
function closeForm() {
    form.style.display = "none";
}

// display book data
function displayBook( formDataObj, columnPlacement, rowPlacement ) { 

    // create new div and button
    let div = document.createElement('div');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let btnremove = document.createElement('button');
    let btnstatus = document.createElement('button');
    // add text to p elements
    p1.innerHTML = formDataObj.title;
    p2.innerHTML = formDataObj.author;
    p3.innerHTML = formDataObj.page;
    // add styling for elements
    p1.style.marginTop = "5px";
    p2.style.marginTop = "5px";
    p3.style.marginTop = "5px";

    btnremove.textContent = "Remove";
    btnremove.style.backgroundColor = "#1992d4";
    btnremove.style.padding = "10px";
    btnremove.style.border = "0px";
    btnremove.style.borderRadius = "7px";
    btnremove.style.marginTop = "10px";
    btnremove.style.color = "white";
    btnremove.addEventListener('click', () => {
        div.style.display = "none";
    });

    btnstatus.textContent = "Read";
    btnstatus.style.padding = "10px";
    btnstatus.style.border = "0px";
    btnstatus.style.borderRadius = "7px";
    btnstatus.style.margin = "5px";
    btnstatus.style.color = "white";

    if ( formDataObj.status == "Read" ) {
        btnstatus.style.backgroundColor = "green";
    }
    else {
        btnstatus.style.backgroundColor = "red";
        btnstatus.textContent = "Not Read";
    }

    btnstatus.addEventListener('click', () => {
        if ( formDataObj.status == "Read" ) {
            btnstatus.style.backgroundColor = "red";
            btnstatus.textContent = "Not Read";
        }
        else {
            btnstatus.style.backgroundColor = "green";
            btnstatus.textContent = "Read";
        }
    });

    div.style.backgroundColor = "white";
    div.style.width = "250px";
    div.style.height = "300px";
    div.style.boxShadow = "0px 0px 14px -2px rgba(0,0,0,0.75)";
    div.style.margin = "20px";
    div.style.borderRadius = "14px";
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";
    div.style.gridColumn = columnPlacement;
    div.style.gridRow = rowPlacement;
    
    // add div, p, and button to main section
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(btnremove);
    div.appendChild(btnstatus);
    bookList.appendChild(div);
}

// event listener for submitting, converting form data, and closing form
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const myFormData = new FormData(e.target);

    const formDataObj = Object.fromEntries(myFormData.entries());

    formDataObj.status = myFormData.getAll("status");
    console.log(formDataObj);

    closeForm()
    if ( columnPlacement == 4) {
        columnPlacement = 0;
        rowPlacement++;
    }
    columnPlacement++;
    displayBook( formDataObj, columnPlacement, rowPlacement );

});

// event listener for opening
btn1.addEventListener('click', () => {
      openForm()
});