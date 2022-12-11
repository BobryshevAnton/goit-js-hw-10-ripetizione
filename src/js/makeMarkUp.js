import Notiflix from 'notiflix';

const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

function makeMarkUp(arr) {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';

  if (arr.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
    return;
  } else if (arr.length >= 2) {
    makeAnyContries(arr);
  } else {
    makeOneContry(arr);
  }
}
function makeAnyContries(arr) {
  const markup = arr
    .map(elem => {
      return `<li class ="li-list"><img class ="list-flag" src="${elem.flags.svg}" alt="${elem.name}"/> <h2>${elem.name}</h2></li>`;
    })
    .join('');

  countryList.innerHTML = markup;
}
function makeOneContry(arr) {
  const markupCountry = `<h2 class ="text__country">${
    arr[0].name
  }</h2><img class ="list-flag big" src ="${arr[0].flags.svg}" alt="${
    arr[0].name
  }"/><p class ="text__country">Capital: <span>${
    arr[0].capital
  }</span></p><p class ="text__country">Population: <span>${
    arr[0].population
  }</span></p>
  <p class ="text__country">Languages: <span>${arr[0].languages
    .map(elem => elem.name)
    .join(', ')}</span></p>`;

  countryInfo.innerHTML = markupCountry;
}

export { makeMarkUp, countryList, countryInfo };
