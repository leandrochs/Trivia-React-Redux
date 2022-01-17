import saveToLocalStorage from './saveToLocalStorage';

const expiredTokenCode = 3;

export const TOKEN_API = 'https://opentdb.com/api_token.php?command=request';

export const getUserToken = () => fetch(TOKEN_API)
  .then((response) => response.json())
  .then((data) => data.token);

async function verifyToken() {
  let token = JSON.parse(localStorage.getItem('token'));
  const TRIVIA_URL = `https://opentdb.com/api.php?amount=5&token=${token}`;

  const getTrivia = await fetch(TRIVIA_URL)
    .then((response) => response.json())
    .catch((error) => console.log(error));

  if (getTrivia.response_code === expiredTokenCode) {
    token = await getUserToken();
    saveToLocalStorage('token', token);
  }

  return token;
}

export async function getQuestions() {
  const token = await verifyToken();
  const TRIVIA_URL = `https://opentdb.com/api.php?amount=5&token=${token}`;

  return fetch(TRIVIA_URL)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
