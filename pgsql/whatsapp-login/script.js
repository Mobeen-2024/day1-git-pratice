// Wait until the page is loaded
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const message = document.getElementById("message");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop form from reloading the page

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Simple validation
    if (!email || !password) {
      message.textContent = "⚠️ Both fields are required!";
      message.style.backgroundColor = "red";
      return;
    }

    // Simulate login success
    message.textContent = `✅ Welcome back, ${email.split("@")[0]}!`;
    message.style.color = "green";

    // Optional: clear fields
    emailInput.value = "";
    passwordInput.value = "";
  });
});
