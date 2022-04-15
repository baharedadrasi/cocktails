import get from './getElement.js';
import { hideLoading } from './toggleLoading.js';

const displaySingleDrink = (data) => {
  hideLoading();

  const drink = data.drinks[0];
  const { strDrink: name, strDrinkThumb: img, strInstructions: desc } = drink;

  const ingredientsList = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
    drink.strIngredient6,
    drink.strIngredient7,
    drink.strIngredient8,
    drink.strIngredient9,
    drink.strIngredient10,
    drink.strIngredient11,
    drink.strIngredient12,
    drink.strIngredient13,
    drink.strIngredient14,
    drink.strIngredient15,
  ];

  const measuresList = [
    drink.strMeasure1,
    drink.strMeasure2,
    drink.strMeasure3,
    drink.strMeasure4,
    drink.strMeasure5,
    drink.strMeasure6,
    drink.strMeasure7,
    drink.strMeasure8,
    drink.strMeasure9,
    drink.strMeasure10,
    drink.strMeasure11,
    drink.strMeasure12,
    drink.strMeasure13,
    drink.strMeasure14,
    drink.strMeasure15,
  ];

  const image = get('.drink-img');
  const title = get('.drink-name');
  const description = get('.drink-desc');
  const ingredients = get('.drink-ingredients');
  const measures = get('.drink-measure');

  image.src = img;
  document.title = name;
  title.textContent = name;
  description.textContent = desc;
  ingredients.innerHTML = ingredientsList
    .map((ingredient) => {
      if (ingredient) {
        return `<li>
              <i class="far fa-check-square"></i>
              ${ingredient}
            </li>`;
      }
    })
    .join('');
  measures.innerHTML = measuresList
    .map((measure) => {
      if (measure) {
        return `<li>
              <i class="fas fa-weight"></i>
              ${measure}
            </li>`;
      }
    })
    .join('');
};

export default displaySingleDrink;
