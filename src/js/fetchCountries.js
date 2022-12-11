import Notiflix from 'notiflix';

export function fetchCountries(name) {
  const baseUrl = 'https://restcountries.com/v2/name/';
  const response = fetch(`${baseUrl}${name}`)
    .then(data => {
      if (!data.ok) {
        console.log(data);
        throw new Error('Error response !!!');
      }
      return data.json();
    })
    .catch(() =>
      Notiflix.Notify.failure('Oops, there is no country with that name!')
    );
  return response;
}
