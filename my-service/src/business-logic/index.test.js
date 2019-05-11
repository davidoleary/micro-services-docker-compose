const { add } = require('./index');

describe('businessLogic',() => {
  describe('add', () => {
    it('should add two numbers correctly',() => {
      expect(add(4, 3)).toEqual(7);
    });
  });
});
