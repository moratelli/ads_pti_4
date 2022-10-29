const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const value = Object.fromEntries(data.entries());

  if (!value.user.trim() || !value.password.trim()) {
    alert("Please fill username and password");
    return;
  }

  setItemsInStorage(value.user, value.password);
  window.location.href = "./home.html";
};

const setItemsInStorage = (user, password) => {
  localStorage.setItem("user", user);
  localStorage.setItem("password", password);
};

const clearFields = () => {
  document.getElementById("login-form").reset();
};

document.querySelector("#login-form").addEventListener("submit", handleSubmit);
document.querySelector("#reset-btn").addEventListener("click", clearFields);
