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
    if(enteredDate === ''){
        display.textContent = "please enter your date of birth"
    }
    else if (getYear < 1900 || getYear > currentYear) {
        display.textContent = "Please enter a valid year of birth";
    }
    else{
        display.textContent = `Your age is ${age} years old`
    }
})