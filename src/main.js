// maps
var map, infoWindow;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    centro: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
  infoWindow = new google.maps.InfoWindow;

  // Prueba la geolocalización de HTML5.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Ubicación encontrada');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function () {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // El navegador no admite la geolocalización
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: el servicio de geolocalización falló.' :
    'Error: su navegador no admite la geolocalización.');
  infoWindow.open(map);
}
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
  search :'',
  data : []
}
// Callback
const addFood = () =>{
  const datafood = JSON.parse(event.target.responseText);
  valFood.data = datafood;
  filterFood.addEventListener('keyup', ()=>{
    let searchFood = filterFood.value;
    valFood.search = searchFood;
    funtFood(valFood)
  })
}
getJSON(addFood)
// Mostrar Lugares
const listfood =()=>{
  localFood.innerHTML += `
  <div>
    <img src="" alt="">
    <ul>
      <li></li>
      <li></li>
     <li></li>
    </ul>
  </div>
`;}
