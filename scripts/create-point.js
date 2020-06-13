// função que pega estados

function populateUFs() {
  // pega o select do formulario
  const ufSelect = document.querySelector("select[name=uf]");
  // pega a API
  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json()) //arrow function enxuta que retorna um json
    .then(states => {

      //estrutura de repetição para os 27 estados
      for (const state of states) {
        ufSelect.innerHTML += `<option value=${state.id}>${state.nome}</option>`;
      }
    })
}
// chama ela
populateUFs();


//função que pega cidades
function getCities(event) {
  const citySelect = document.querySelector("[name=city]");
  const stateInput = document.querySelector("[name=state]");

  const ufValue = event.target.value

  const indexOfSelectedState = event.target.selectedIndex
  stateInput.value = event.target.options[indexOfSelectedState].text

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

  citySelect.innerHTML = "<option>Selecione a cidade</option>"; //deixa o campo cidade sempre limpo
  citySelect.disabled = true //so será ahabilitado quando o accndo estado for selecionado

  fetch(url)
    .then((res) => res.json()) //arrow function enxuta
    .then(cities => {
      for (const city of cities) {
        citySelect.innerHTML += `<option value=${city.nome}>${city.nome}</option>`;
      }

      // até selecionar o estado o input fica como false DISABLED
      citySelect.disabled = false
    });
}

document.querySelector("select[name=uf]").addEventListener("change", getCities);

//Ítens de Coleta ===============================================

//pega todos os LI e coloca em uma variavel
const itensToCollect = document.querySelectorAll(".itens-grid li");

for (const item of itensToCollect) {
  item.addEventListener("click", handleSelectedItem);
}

const collectedItens = document.querySelector;
let selectedItens = [1, 2, 3, 4, 5, 6]; // itens selecionados seçrão salvos em array de itens

function handleSelectedItens(event) {
  const itemLi = event.target;

  //adicionar ou remover uma classe com javascript
  itemLi.classList.toggle("selected");

  const itemId = itemLi.dataset.id;
}

// verificar se existem itens selecionados, se sim
//prga os itens selecionados
const alreadySelected = selectedItens.findIndex(function (item) {
  const itemFound = item == itemId; // isso será true ou false
  return itemFound;
});

// Se ja etiver selecionado,
if (alreadySelected >= 0) {
  // tirar a seleção
  const filteredItems = selectedItens.filter((item) => {
    const itemIsDiferent = item != itemId; //false
    const itemFound = item === itemId;
    return itemFound;
  });

  selectedItens = filteredItens;
} else {
  // Se nao estiver selecionado,
  // Adiciona a seleção.
  selectedItem.push(itensId); //push coloca o elemento dentro do array

  // Atualizar o campo escodido(input hidden) com os itesn selecionados
  document.querySelector("input[name=item");
}
