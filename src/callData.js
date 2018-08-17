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
    // listfood(searchDate)
  });
}
getJSON(addFood)
//Lugares
const listfood = (typeFood) => {
  typeFood.map((comida) => {
    localFood.innerHTML += `
  <div>
    <img src="${comida.image}" alt="">
    <ul>
      <li>${comida.name}</li>
      <li>${comida.food}</li>
    </ul>
  </div>
`;
  })
}