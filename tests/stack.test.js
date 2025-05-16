const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
  expect(stack.peek()).toBeUndefined();
});

test('peek after pushing returns top value', () => {
  stack.push('Test123');
  expect(stack.peek()).toBe('Test123');
});
