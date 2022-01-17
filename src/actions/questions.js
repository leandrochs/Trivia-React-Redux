// array de questoes
export const QUESTIONS_RESPONSE = 'QUESTIONS_RESPONSE';

export const questionsResponse = (payload) => ({
  type: QUESTIONS_RESPONSE,
  payload,
});
