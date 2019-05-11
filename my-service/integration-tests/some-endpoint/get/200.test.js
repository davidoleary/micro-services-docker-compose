const request = require('supertest');

let app;
const ENDPOINT = '/api/some-endpoint';

describe(ENDPOINT, () => {
  beforeAll(() => {
    app = require('../../../src/app');
  });

  test(`GIVEN I call [${ENDPOINT}] 
        WHEN the endpoint responds
        THEN I should receive a success code [200] 
        AND some text`, () => {

    return request(app)
      .get(`${ENDPOINT}`)
      .send()
      .then(({ status, text }) => {
        expect(status).toBe(200);
        expect(text).toBe('data from my-service API - 10');
      });
  });
});
