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

    // create new div
    let div = document.createElement('div');
    let txt = "";
    for (let data in formDataObj) {
    txt += formDataObj[data] + " ";
    };
    div.innerHTML = txt;
    // add styling for grid placement and use index variable
    div.style.gridColumn = columnPlacement;
    div.style.gridRow = rowPlacement;
    // add div to main section
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
    if ( columnPlacement == 5) {
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