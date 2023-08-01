const form_Registration = document.getElementById("form_Registration");
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("password-error");
const txtFirstName = document.getElementById("txtFirstName");
const first_name = document.getElementById("first_name");
const txtMiddleName = document.getElementById("txtMiddleName");
const midname = document.getElementById("midname");
const txtLastName = document.getElementById("txtLastName");
const lastname = document.getElementById("lastname");
const DOB = document.getElementById("DOB");
const dob = document.getElementById("dob");
const Hobby = document.getElementById("Hobby");
const hobby = document.getElementById("hobby");
const Gender = document.getElementById("Gender");
const gender = document.getElementById("gender");
const Email = document.getElementById("Email");
const email = document.getElementById("email");
const City = document.getElementById("City");
const city = document.getElementById("city");
var submitButton = document.getElementById("submit");


function validatePassword(e) {
    const password = passwordInput.value;

    if (password.length < 8) {
        passwordError.textContent = "Enter your password / Password must be at least 8 characters long.";
        e.preventDefault();
    }
}

function validateForm(e) {
    var firstName = txtFirstName.value;
    var middleName = txtMiddleName.value;
    var lastName = txtLastName.value;
    var dateOfBirth = DOB.value;
    var userHobby = Hobby.value;
    var userGender = Gender.value;
    var userEmail = Email.value;
    var userCity = City.value;

    if (firstName === "") {
        first_name.textContent = "First name is empty";
        e.preventDefault();
    }

    if (middleName === "") {
        midname.textContent = "Middle name is empty";
        e.preventDefault();
    }

    if (lastName === "") {
        lastname.textContent = "Last name is empty";
        e.preventDefault();
    }

    if (dateOfBirth === "") {
        dob.textContent = "DOB is empty";
        e.preventDefault();
    }

    if (userHobby === "") {
        hobby.textContent = "Please select your hobby";
        e.preventDefault();
    }

    if (userGender === "") {
        gender.textContent = "Please select your gender";
        e.preventDefault();
    }

    if (userEmail === "") {
        email.textContent = "Enter your email";
        e.preventDefault();
    }

    if (userCity === "") {
        city.textContent = "Please select your city";
        e.preventDefault();
    }

}


form_Registration.addEventListener("submit", validatePassword);
form_Registration.addEventListener("submit", validateForm);

// var textArea = document.getElementById("mytextarea");
// const remainingCharacters = document.getElementById("charCount");
// const MAX_LENGTH = 100;

// textArea.oninput = function(e) {
//   const remainingCount = MAX_LENGTH - e.target.value.length;
//   remainingCharacters.innerText = remainingCount+"/100";
//   textArea.value = e.target.value.substring(0, 99);
//   console.log(e.target.value);
// };



