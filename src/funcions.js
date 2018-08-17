window.funtFood = (valFood) => {
  let localFood = valFood.data.filter(element => element.food.indexOf(valFood.search) > -1);
  return localFood;
}
