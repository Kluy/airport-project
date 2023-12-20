// const baseUrl = 'https://api.iev.aero/api/flights/';
const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/airport/';

export const getFlights = date => {
  // return fetch(`${baseUrl}${date}`);
  return fetch(`${baseUrl}`)
    .then(response => {
      return response.json();
    })
    .catch(() => console.log('Internal Server Error. Can"t display flights'));
};
