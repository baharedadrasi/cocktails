import get from './getElement.js';
import presentDrinks from './presentDrinks.js';

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const form = get('.search-form');
const search = get('.search-form input');

form.addEventListener('keyup', (e) => {
  e.preventDefault();
  const value = search.value;
  if (value) {
    presentDrinks(`${baseURL}${value}`);
  } else {
    presentDrinks(`${baseURL}a`);
  }
});
