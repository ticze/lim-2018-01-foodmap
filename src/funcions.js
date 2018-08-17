window.funtFood = (valFood) => {debugger
  let localFood = valFood.data.filter(element => element.food.indexOf(valFood.search) > -1);
  return localFood;
}
