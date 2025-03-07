
let amigos =[];
let sorteados =[];

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nomeAmigo = input.value.trim();

  if (nome === "" || !isNaN(nome)) {
  alert("Por favor, insira um nome válido");
  return;
  }

  amigos.push(nome);
  atualizarLista();

  input.value = "";
}

function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  (lista.innerHTML = "");
  amigos.forEach((amigos, index) => {
    const li = document.createElement("li");
    li.textContent = amigo + (index < amigos.length - 1 ? "," : "");
    lista.appendChild(li);
  });

}

function sortearAmigo() {
  if(amigos.length === 0) {
    alert("A lista de amigos está vazia");
    return;
  }

  let indiceSorteado = Math.floor(Math.random() * amigos.length);
  
  let amigoSorteado = amigos[indiceSorteado];

  sorteados.push(amigoSorteado);

  const resultado = document.getElementById("resultado"); 
  resultado.innerHTML = "O amigo secreto é:" + sorteados;

  sorteados = [];
  atualizarLista();

  resultado.clear
} 