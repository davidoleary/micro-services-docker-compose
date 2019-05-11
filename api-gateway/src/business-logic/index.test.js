const { multiply } = require('./index');

describe('businessLogic',() => {
  describe('multiply', () => {
    it('should multiply two numbers correctly',() => {
      expect(multiply(5, 6)).toEqual(30);
    });
  });
});
