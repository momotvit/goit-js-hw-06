 
// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент < li >.Обзательно используй метод
// document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ingredientListEl = document.getElementById('ingredients');

function addIngredients(array) {
  ingredients.forEach(ingredient => {
    const ingridientEl = document.createElement('li');
    ingridientEl.textContent = ingredient;
    ingridientEl.classList.add('item');
    ingredientListEl.append(ingridientEl);
  })

}

addIngredients(ingredients);














