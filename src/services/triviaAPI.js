export const TOKEN_API = 'https://opentdb.com/api_token.php?command=request';

export const getUserToken = () => fetch(TOKEN_API)
  .then((response) => response.json())
  .then((data) => data.token);
