function toggleMenu() {
  const navList = document.getElementById("nav-list");
  navList.classList.toggle("active");
}

function mudarFundo(estilo) {
  document.body.classList.remove("tema-padrao", "tema-claro", "tema-escuro");

  if (estilo === "claro") {
    document.body.classList.add("tema-claro");
  } else if (estilo === "escuro") {
    document.body.classList.add("tema-escuro");
  } else {
    document.body.classList.add("tema-padrao");
  }
}

// Inicializa com o tema padrão
document.addEventListener("DOMContentLoaded", () => {
  mudarFundo("padrao");
});
