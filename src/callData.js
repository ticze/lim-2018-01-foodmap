//filtrado de comidas
const urlFood = '../dataFood/food.json';
const filterFood = document.getElementById('search');
const localFood = document.getElementById('listFood');

const getJSON = (callback) => {
  const request = new XMLHttpRequest();
  request.open('GET', urlFood);
  request.onload = callback;
  request.onerror = handleError;
  request.send();
}
const handleError = () => {
  console.log('Se ha presentado un error');
}
let valFood = {
  search: '',
  data: []
}
// Callback
const addFood = () => {
  const datafood = JSON.parse(event.target.responseText);
  listfood(datafood);
  valFood.data = datafood;
  filterFood.addEventListener('keyup', () => {
    let searchFood = filterFood.value;
    valFood.search = searchFood;
    const searchDate = funtFood(valFood)
    localFood.innerHTML = '';
    listfood(searchDate);
  });
}
getJSON(addFood)
//Lugares
const listfood = (typeFood) => {
  let cont = 0;
  typeFood.map((comida) => {
    cont++
    localFood.innerHTML += `
  <div>
    <img src="${comida.image}" alt="">
    <ul>
      <li>${comida.name}</li>
    </ul>
    <a class="waves-effect waves-light btn modal-trigger" href="#modal1${cont}">Informe</a>
    <!-- Modal Structure -->
    <div id="modal1${cont}" class="modal">
    <div class="modal-content">
      <img src="${comida.image}" alt="">
      <ul>
        <li>${comida.name}</li>
        <li>${comida.address}</li>
        <li>${comida.price}</li>
      </ul>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Ordenar</a>
    </div>
    </div>
  </div>
`;
  })
}