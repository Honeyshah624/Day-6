function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-msg");

  if (user === "admin" && pass === "1234") {
    alert("Login successful!");
  } else {
    errorMsg.style.display = "block";
  }
}
