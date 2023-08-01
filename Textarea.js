// var textArea = document.getElementById("mytextarea");
// const remainingCharacters = document.getElementById("charCount");
// const MAX_LENGTH = 100;

// textArea.oninput = function(e) {
//   const remainingCount = MAX_LENGTH - e.target.value.length;
//   remainingCharacters.innerText = remainingCount+"/100";
//   textArea.value = e.target.value.substring(0, 99);
//   console.log(e.target.value);
// };

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var hasUppercase = /[A-Z]/.test(password);
    var hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    var passwordsMatch = password === confirmPassword;
    if (!hasUppercase) {
        alert("Password must contain at least one uppercase letter");
        return;
    }

    if (!hasSpecialChar) {
        alert("Password must contain at least one special character");
        return;
    }

    if (!passwordsMatch) {
        alert("Passwords do not match");
        return;
    }
    alert("Password is valid!");
});
