const btn1 = document.querySelector('#btn-add');
const btn2 = document.querySelector('#btn-submit');

let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

btn1.addEventListener('click', () => {
      openForm()
});

btn2.addEventListener('click', () => {
    closeForm()
});
  