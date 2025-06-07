import "./assets/styles/main.scss"

const app = document.getElementById("app");

fetch("./src/pages/home.html")
  .then(res => res.text())
  .then(content => app.innerHTML = content)
