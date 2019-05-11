const request = require('supertest');

// these test require all services to be running via docker up
const BASEURL = 'http://localhost:3001';
const ENDPOINT = '/forward-to-other-service';

describe(ENDPOINT, () => {
  test(`GIVEN I call api-gateway [${ENDPOINT}] 
        WHEN the endpoint responds
        THEN I should receive a success code [200] 
        AND some text that comes from my-service`, () => {

    return request(BASEURL)
      .get(`${ENDPOINT}`)
      .send()
      .then(({ status, text }) => {
        expect(status).toBe(200);
        expect(text).toBe('data from other service: data from my-service API - 10');
      });
  });
});
