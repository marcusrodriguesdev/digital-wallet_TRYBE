const API_ECONOMY = 'https://economia.awesomeapi.com.br/json/all';

export default async function getCoins() {
  const request = fetch(API_ECONOMY).then((response) => response.json());
  return request;
}
