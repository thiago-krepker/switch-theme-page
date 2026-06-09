const botaoTema = document.getElementById("toggle-tema");

botaoTema.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    botaoTema.textContent = "☀️ Modo Claro";
  } else {
    botaoTema.textContent = "🌙 Modo Escuro";
  }
});

let contador = 0;
const numero = document.getElementById("numero");
const botaoClique = document.getElementById("botao-clique");
const botaoReset = document.getElementById("botao-reset");

botaoClique.addEventListener("click", function () {
  contador++;
  numero.textContent = contador;
});

botaoReset.addEventListener("click", function () {
  contador = 0;
  numero.textContent = contador;
});