export * from './player';
export const requestError = (error) => ({
  type: REQUEST_ERROR,
  error,
});

export const thunkCurrencies = () => async (dispatch) => {
  try {
    const response = await fetch('https://opentdb.com/api_token.php?command=request');
    const quiz = await response.json();
    dispatch(getAPI(quiz));
  } catch (error) {
    dispatch(requestError(error));
  }
};
