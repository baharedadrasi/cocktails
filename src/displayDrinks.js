import get from './getElement.js';
import { hideLoading } from './toggleLoading.js';

const displayDrinks = ({ drinks }) => {
  const cocktailsSection = get('.section-center');
  const title = get('.title');

  if (!drinks) {
    hideLoading();
    title.textContent = `Sorry,No Drinks Matched Your Search`;
    cocktailsSection.innerHTML = null;
    return;
  }

  const newDrinks = drinks
    .map(({ idDrink: id, strDrink: name, strDrinkThumb: image }) => {
      return `<a href="./drink.html">
          <article class="cocktail" data-id="${id}">
            <img
              src="${image}"
              alt="${name}"
            />
            <h3>${name}</h3>
          </article>
        </a>`;
    })
    .join('');
  hideLoading();
  title.textContent = '';
  cocktailsSection.innerHTML = newDrinks;
  return cocktailsSection;
};

export default displayDrinks;
