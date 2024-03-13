const date = document.getElementById('date');
let btn = document.getElementById('btn')
let dob = new Date();
let display = document.querySelector('.display');
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    const enteredDate = date.value;
    let currentYear = dob.getFullYear();
    let dateOfBirth = new Date(enteredDate);
    let getYear = dateOfBirth.getFullYear();
    let age = currentYear - getYear;
    display.textContent = `Your age is ${age} years old`
})