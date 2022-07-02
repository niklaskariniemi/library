// intialize variables
const btn1 = document.querySelector('#btn-add');
const form = document.getElementById("container");

// open form
function openForm() {
    form.style.display = "block";
}
 
// close form
function closeForm() {
    form.style.display = "none";
}

// event listener for submitting, converting form data, and closing form
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const myFormData = new FormData(e.target);

    const formDataObj = Object.fromEntries(myFormData.entries());

    formDataObj.status = myFormData.getAll("status");
    console.log(formDataObj);

    closeForm()

});

// event listener for opening
btn1.addEventListener('click', () => {
      openForm()
});