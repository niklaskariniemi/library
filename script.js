// intialize variables
const btn1 = document.querySelector('#btn-add');
const form = document.getElementById("container");
const bookList = document.getElementById("book-list");

// open form
function openForm() {
    form.style.display = "block";
}
 
// close form
function closeForm() {
    form.style.display = "none";
}

// display book data
function displayBook( formDataObj ) { 
    
    // create new div
    let div = document.createElement('div');
    let txt = "";
    for (let data in formDataObj) {
    txt += formDataObj[data] + " ";
    };
    div.innerHTML = txt;
    bookList.appendChild(div);
    // add styling for grid placement and use index variable
    // add div to main section
}

// event listener for submitting, converting form data, and closing form
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const myFormData = new FormData(e.target);

    const formDataObj = Object.fromEntries(myFormData.entries());

    formDataObj.status = myFormData.getAll("status");
    console.log(formDataObj);

    displayBook( formDataObj );
    closeForm()

});

// event listener for opening
btn1.addEventListener('click', () => {
      openForm()
});