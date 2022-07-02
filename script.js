const btn1 = document.querySelector('#btn-add');
const btn2 = document.querySelector('#btn-submit');

const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const myFormData = new FormData(e.target);

    const formDataObj = Object.fromEntries(myFormData.entries());

    formDataObj.status = myFormData.getAll("status");
    console.log(formDataObj);

});