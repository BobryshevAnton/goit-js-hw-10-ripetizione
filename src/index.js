import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
import { makeMarkUp, countryList, countryInfo } from './js/makeMarkUp';
// import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

//refs
const inputSearch = document.querySelector('#search-box');
// const countryList = document.querySelector('.country-list');
// const countryInfo = document.querySelector('.country-info');

//addListener
inputSearch.addEventListener('input', debounce(inputName, DEBOUNCE_DELAY));

//function
function inputName(event) {
  const searchName = event.target.value.trim();

  countryList.innerHTML = '';
  countryInfo.innerHTML = '';

  if (searchName === '') {
    return;
  }

  fetchCountries(searchName).then(response => {
    makeMarkUp(response);
  });
}
