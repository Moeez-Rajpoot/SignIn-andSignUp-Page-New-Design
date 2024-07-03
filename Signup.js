document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("signin").addEventListener("click", function () {
    window.location.href = "login.html";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("signup").addEventListener("click", function () {
    window.location.href = "Signup.html";
  });
});


function handleSubmit(event) {
  event.preventDefault();

  const username = document.getElementById("Username").value.trim();
  const password = document.getElementById("Password").value;
  const email = document.getElementById("Email").value;
  const phone = document.getElementById("Phone").value;
  const Cnic = document.getElementById("Cnic").value;
  const DateofBirth = document.getElementById("Date").value;
  const Gender = document.getElementById("Gender").value;
  const phoneerror = document.getElementById("phonecheck");
  const cnicerror = document.getElementById("cniccheck");
  const errorMessage = document.getElementById("error-message");
  var passwordStrength = document.getElementById("passwordStrength");
  errorMessage.style.display = "none";
  phoneerror.style.display = "none";
  cnicerror.style.display = "none";

  handleUsernameCheck(event);
  handlePasswordCheck(event);
  handlePhoneCheck(event);
  handleCnicCheck(event);

  const credentials = {
    username: username,
    password: password,
    email: email,
    phone: phone,
    cnic: Cnic,
    dateOfBirth: DateofBirth,
    gender: Gender,
  };

  
let existingCredentials = JSON.parse(localStorage.getItem("signupCredentials"));
if (!Array.isArray(existingCredentials)) {
  existingCredentials = [];
}
existingCredentials.push(credentials);
localStorage.setItem("signupCredentials", JSON.stringify(existingCredentials));

  document.getElementById("Username").value = "";
  errorMessage.style.display = "none";
  document.getElementById("Password").value = "";
  passwordStrength.style.display = "none";
  document.getElementById("Email").value = "";
  document.getElementById("Phone").value = "";
  document.getElementById("Cnic").value = "";
  document.getElementById("Date").value = "";
  document.getElementById("Gender").value = "";
}

function handleCnicCheck(event) {
  const cnicerror = document.getElementById("cniccheck");

  var cnic = document.getElementById("Cnic").value;
  if (cnic.length === 0) {
    cnicerror.style.display = "block";
    cnicerror.innerText = "CNIC cannot be empty";
    return false;
  } else {
    cnicerror.style.display = "none";
  }
  if (cnic.length !== 15) {
    cnicerror.style.display = "block";
    cnicerror.innerText = "CNIC must be 15 digits long";
    return false;
  } else {
    cnicerror.style.display = "none";
  }
}

function handleUsernameCheck(event) {
  const errorMessage = document.getElementById("error-message");
  const username = document.getElementById("Username").value.trim();
  if (username.length === 0) {
    errorMessage.style.display = "block";
    errorMessage.innerText = "Username cannot be empty.";
    return;
  } else {
    errorMessage.style.display = "none";
  }

  if (!isNaN(username)) {
    errorMessage.style.display = "block";
    errorMessage.innerText =
      "Username must include alphabets and cannot be only numbers.";
    return false;
  } else {
    errorMessage.style.display = "none";
  }
}
function handlePasswordCheck(event) {
  const password = document.getElementById("Password").value;
  var passwordStrength = document.getElementById("passwordStrength");
  if (password.length === 0) {
    passwordStrength.style.display = "none";
    return false;
  }
  if (password.length <= 8) {
    console.log("Password is weak");
    passwordStrength.style.display = "block";
    passwordStrength.style.color = "red";
    passwordStrength.innerText = "Password is weak";
    return false;
  } else if (password.length > 8 && password.length <= 12) {
    passwordStrength.style.display = "block";
    passwordStrength.style.color = "orange";
    passwordStrength.innerText = "Password is normal";
  } else {
    passwordStrength.style.display = "block";
    passwordStrength.style.color = "green";
    passwordStrength.innerText = "Password is strong";
  }
}

function handlePhoneCheck(event) {
  const phoneerror = document.getElementById("phonecheck");
  var phoneNumber = document.getElementById("Phone").value;
  var phoneRegex = /^\+923\d{9}$/;
  if (phoneNumber.length === 0) {
    phoneerror.style.display = "block";
    phoneerror.innerText = "Phone number cannot be empty";
    return false;
  } else {
    phoneerror.style.display = "none";
  }
  if (!phoneRegex.test(phoneNumber)) {
    phoneerror.style.display = "block";
    phoneerror.innerText = "Phone number must be in the format +923xxxxxxxxx";
    return false;
  } else {
    phoneerror.style.display = "none";
  }
}

function handleLogin(event) {
  event.preventDefault();
  const errorMessage = document.getElementById("error-credentials");
  const Email = document.getElementById("Email").value;
  const password = document.getElementById("Password").value;

 
  const credentialsArray = JSON.parse(localStorage.getItem("signupCredentials")) || [];
  const credentialMatch = credentialsArray.find(cred => cred.email.toLowerCase() === Email.toLowerCase() && cred.password === password);

  if (credentialMatch) {
    window.location.href = "Dashboard.html";
  } else {
    errorMessage.style.display = "block";
    console.log("Invalid Credentials");
  }

  document.getElementById("Email").value = "";
  document.getElementById("Password").value = "";
}
