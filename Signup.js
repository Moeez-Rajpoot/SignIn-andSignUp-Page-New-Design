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

function handlereturn(event) {
  event.preventDefault();
  window.location.href = "login.html";
    
}

function handleSubmit(event) {
  event.preventDefault();

  const errorMessage = document.getElementById("error-message");
  const username = document.getElementById("Username").value.trim();
  const password = document.getElementById("Password").value;
  const email = document.getElementById("Email").value;
  const phone = document.getElementById("Phone").value;
  const Cnic = document.getElementById("Cnic").value;
  const DateofBirth = document.getElementById("Date").value;
  const Gender = document.getElementById("Gender").value;

  if (!username) {
    errorMessage.style.display = "block";
    console.log("Please fill out the Username Correctly.");
    return;
  }
  console.log("Username:", username);
  console.log("Password:", password);
  console.log("Email:", email);
  console.log("Phone:", phone);
  console.log("Cnic:", Cnic);
  console.log("Date:", DateofBirth);
  console.log("Gender:", Gender);

  const credentials = {
    username: username,
    password: password,
    email: email,
    phone: phone,
    cnic: Cnic,
    dateOfBirth: DateofBirth,
    gender: Gender,
  };

  localStorage.setItem("signupCredentials", JSON.stringify(credentials));

  document.getElementById("Username").value = "";
  document.getElementById("Password").value = "";
  document.getElementById("Email").value = "";
  document.getElementById("Phone").value = "";
  document.getElementById("Cnic").value = "";
  document.getElementById("Date").value = "";
  document.getElementById("Gender").value = "";

 

  
}

function handleLogin(event){
    event.preventDefault();
    const errorMessage = document.getElementById("error-credentials");
    const Email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value;

    const credentials = JSON.parse(localStorage.getItem("signupCredentials"));
    console.log(credentials.email, credentials.password);
    if(credentials.email.toLowerCase() === Email.toLowerCase() && credentials.password === password){
        window.location.href = "Welcome.html";
    }
    else{
      errorMessage.style.display = "block";
        console.log("Invalid Credentials");
    }

    document.getElementById("Email").value = "";
    document.getElementById("Password").value = "";
}
