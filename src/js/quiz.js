const perguntas = [
  {
    pergunta: "Quantas enchentes o Brasil registrou entre 1991 e 2022?",
    opcoes: ["Mais de 10 mil", "Mais de 21 mil", "Menos de 5 mil"],
    resposta: 1,
  },
  {
    pergunta: "Qual órgão brasileiro monitora desastres naturais?",
    opcoes: ["IBGE", "CEMADEN", "INSS"],
    resposta: 1,
  },
  {
    pergunta: "O que mais contribui para enchentes no Brasil?",
    opcoes: [
      "Falta de políticas públicas",
      "Só mudanças climáticas",
      "Pouca chuva",
    ],
    resposta: 0,
  },
  {
    pergunta: "Quanto o Brasil perde por ano com desastres naturais?",
    opcoes: ["R$ 1 bi", "R$ 4 bi", "R$ 8 bi"],
    resposta: 2,
  },
  {
    pergunta: "Qual estado teve maior tragédia em 2024?",
    opcoes: ["SP", "MG", "RS"],
    resposta: 2,
  },
  {
    pergunta: "Que cidade ficou submersa por semanas?",
    opcoes: ["Campinas", "Roca Sales", "Salvador"],
    resposta: 1,
  },
  {
    pergunta: "Qual tecnologia pode prever enchentes?",
    opcoes: ["TV a cabo", "Sensores inteligentes", "Lanternas LED"],
    resposta: 1,
  },
  {
    pergunta: "Quantas pessoas vivem em áreas de risco?",
    opcoes: ["2 mi", "5 mi", "8 mi"],
    resposta: 2,
  },
  {
    pergunta: "Quanto das perdas anuais vem de enchentes?",
    opcoes: ["40%", "60%", "80%"],
    resposta: 1,
  },
  {
    pergunta: "Que país usa alerta precoce eficaz?",
    opcoes: ["Brasil", "Japão", "Chile"],
    resposta: 1,
  },
];

function enviarQuiz() {
  let acertos = 0;
  perguntas.forEach((p, i) => {
    const selecionada = document.querySelector(`input[name='q${i}']:checked`);
    if (selecionada && parseInt(selecionada.value) === p.resposta) acertos++;
  });
  document.getElementById(
    "resultado"
  ).innerText = `Você acertou ${acertos} de ${perguntas.length} perguntas.`;
}

window.onload = () => {
    const container = document.getElementById("quiz-container");
    perguntas.forEach((p, i) => {
        const div = document.createElement("div");
        div.innerHTML = `<p>${p.pergunta}</p>` + p.opcoes.map((op, j) =>
            `<label><input type="radio" name="q${i}" value="${j}"> ${op}</label><br>`
        ).join("");
        container.appendChild(div);
    });
};