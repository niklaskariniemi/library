const btn1 = document.querySelector('#btn-add');
const btn2 = document.querySelector('#btn-submit');

const form = document.getElementById("container");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const myFormData = new FormData(e.target);

    const formDataObj = Object.fromEntries(myFormData.entries());

    formDataObj.status = myFormData.getAll("status");
    console.log(formDataObj);

});

function openForm() {
    form.style.display = "block";
}
  
function closeForm() {
    form.style.display = "none";
}

btn1.addEventListener('click', () => {
      openForm()
});

btn2.addEventListener('click', () => {
    closeForm()
});