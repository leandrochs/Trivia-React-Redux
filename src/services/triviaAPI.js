import saveToLocalStorage from './localStorage';

const expiredTokenCode = 3;

export const TOKEN_API = 'https://opentdb.com/api_token.php?command=request';

export const getUserToken = () => fetch(TOKEN_API)
  .then((response) => response.json())
  .then((data) => data.token);

export async function getQuestions() {
  let token = JSON.parse(localStorage.getItem('token'));
  let TRIVIA_URL = `https://opentdb.com/api.php?amount=5&token=${token}`;

  const verifyToken = await fetch(TRIVIA_URL)
    .then((response) => response.json())
    .catch((error) => console.log(error));

  if (verifyToken.response_code === expiredTokenCode) {
    token = JSON.parse(getUserToken());
    saveToLocalStorage('token', token);
  }

  TRIVIA_URL = `https://opentdb.com/api.php?amount=5&token=${token}`;

  return fetch(TRIVIA_URL)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
