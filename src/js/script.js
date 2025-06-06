function toggleMenu() {
  const navList = document.getElementById("nav-list");
  navList.style.display = navList.style.display === "flex" ? "none" : "flex";
}

function mudarFundo(estilo) {
  if (estilo === "claro") {
    document.body.style.backgroundColor = "#f0f0f0";
  } else if (estilo === "escuro") {
    document.body.style.backgroundColor = "#222";
  } else {
    document.body.style.backgroundColor = "#ffffff";
  }
}
