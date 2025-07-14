function register() {
  const username = document.getElementById("reg-username").value;
  const password = document.getElementById("reg-password").value;

  if (localStorage.getItem(username)) {
    alert("Username already exists.");
    return;
  }

  localStorage.setItem(username, password);
  alert("Registered successfully!");
  showLogin();
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const storedPassword = localStorage.getItem(username);

  if (storedPassword && storedPassword === password) {
    document.getElementById("form").style.display = "none";
    document.getElementById("register-form").style.display = "none";
    document.getElementById("secured").style.display = "block";
    document.getElementById("welcome-msg").innerText = `Welcome, ${username} 🔐`;
  } else {
    alert("Invalid username or password.");
  }
}

function logout() {
  document.getElementById("form").style.display = "block";
  document.getElementById("register-form").style.display = "none";
  document.getElementById("secured").style.display = "none";
}

function showRegister() {
  document.getElementById("form").style.display = "none";
  document.getElementById("register-form").style.display = "block";
  document.getElementById("secured").style.display = "none";
}

function showLogin() {
  document.getElementById("form").style.display = "block";
  document.getElementById("register-form").style.display = "none";
  document.getElementById("secured").style.display = "none";
}
