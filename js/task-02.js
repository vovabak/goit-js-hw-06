const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',  
];

const ingredientsRef = document.querySelector('#ingredients')


function createIngredientsItemsMarkup(ingredients) {
  
  const ingredientsItem = [];

  for (let ingredient of ingredients) {

    const ingredientItemRef = document.createElement('li');

    ingredientItemRef.textContent = ingredient;
    ingredientItemRef.classList.add('item');
    ingredientsItem.push(ingredientItemRef);      
  }

  ingredientsRef.append(...ingredientsItem);
}

createIngredientsItemsMarkup(ingredients)