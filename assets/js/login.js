const button = document.getElementById("loginBtn");

button.addEventListener("click", login);

function value(id) {
  return document.getElementById(id).value;
}

function redirect(loc) {
  window.location.href = `./${loc}`;
}

function login(e) {
  e.preventDefault();
  redirectTo(value("username"), value("password"));
}

function redirectTo(username, password) {
  if (username.length != 0 && password.length != 0) {
    if (username === "admin" && password === "iamadmin") {
      redirect("admin");
    } else if (username === "doctor" && password === "iamdoctor") {
      redirect("doctor");
    } else if (username === "staff" && password === "iamstaff") {
      redirect("staff");
    } else {
      alert("Bad Credentials");
    }
  }
}
