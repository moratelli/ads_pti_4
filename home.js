const getItemsFromStorage = () => {
  const user = localStorage.getItem("user");
  const password = localStorage.getItem("password");
  return { user, password };
};

const fillDataToHomePage = () => {
  const data = getItemsFromStorage();
  document.getElementById("user").innerHTML = data.user;
  document.getElementById("password").innerHTML = data.password;
};

document.addEventListener("DOMContentLoaded", fillDataToHomePage);
