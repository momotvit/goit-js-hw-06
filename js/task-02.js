const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];




const ingredientListEl = document.getElementById('ingredients');
console.log(ingredientListEl);

const createIngredientsHtmlList = ingredients.map(ingredientItemEl => {
  const createIngredientLi = document.createElement("li");
  createIngredientLi.textContent = ingredientItemEl;
  createIngredientLi.classList.add("item");
 
  return createIngredientLi;
});
  addingIngridientsToHtml();
  

 
function addingIngridientsToHtml() { ingredientListEl.append(...createIngredientsHtmlList) };























