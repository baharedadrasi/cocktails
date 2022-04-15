import get from './getElement.js';
import presentDrinks from './presentDrinks.js';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const form = get('.search-form');
const search = get('.search-form input');

form.addEventListener('keyup', () => {
  const value = search.value;
  presentDrinks(`${URL}${value}`);
});
