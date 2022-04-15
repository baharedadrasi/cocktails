import { showLoading, hideLoading } from './toggleLoading.js';

const fetchDrinks = async (url) => {
  showLoading();
  try {
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (error) {
    hideLoading();
  }
};

export default fetchDrinks;
