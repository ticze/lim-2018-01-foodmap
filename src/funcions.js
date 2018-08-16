window.quest = (aliment,inputFood) =>{
  if (inputFood) {
    if (aliment) {
      inputFood = inputFood.toLowerCase();
      return aliment.filter(aliments => aliments.food.toLowerCase().indexOf(inputFood) > -1);
    }
    return [];
  }
  return aliment || [];
}

window.funtFood = (valFood) => {
  if (valFood.search.trim !== '') {
   let localFood = quest(valFood.data, valFood.search)
  }
  return localFood;
}