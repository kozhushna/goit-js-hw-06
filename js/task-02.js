const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsListEl = document.querySelector('#ingredients');

const createIngredientsList = ingredients => {
  return ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;
    itemEl.classList.add('item');

    return itemEl;
  });
};

const elements = createIngredientsList(ingredients);

ingredientsListEl.append(...elements);
