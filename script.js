function changeTheme(){
  document.body.classList.toggle("dark");
}

function showInfo(){
  let extra = document.getElementById("extra");
  extra.style.display = extra.style.display === "block" ? "none" : "block";
}