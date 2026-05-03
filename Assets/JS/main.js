


// ==== RECEITAS ====

// -- Botão "Ver mais" --

const receitas = document.querySelectorAll(".receita");
const botao = document.getElementById("verMais");

// esconder tudo depois do 6
for (let i = 6; i < receitas.length; i++) {
  receitas[i].style.display = "none";
}

// quando clicar no botão
botao.onclick = function () {
  for (let i = 6; i < receitas.length; i++) {
    receitas[i].style.display = "block";
  }

  botao.style.display = "none";
};


