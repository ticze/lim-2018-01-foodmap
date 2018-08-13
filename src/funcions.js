window.funtFood = (valFood) => {
  let localFood = nameFood(valFood.data)
  if (valFood.search.trim !== '') {
    localFood = quest(localFood, valFood.search)
  }
  return localFood;
}

window.nameFood = (aliment) =>{
  console.log(aliment)
  const arrFood = aliment.map((elemt)=>{
    const loFood = elemt.food;
    const forFood = loFood.forEach(element => {
      return element;
    });
    return forFood;
  })
  console.log(arrFood)
  return arrFood;
}

window.quest = (aliment,inputFood) =>{
  if (inputFood) {
    if (aliment) {
      inputFood = inputFood.toLowerCase();
      return aliment.filter(aliments => aliments && aliments.food && aliments.food.toLowerCase().indexOf(inputFood) >= -1);
    }
    return [];
  }
  return aliment || [];
}
