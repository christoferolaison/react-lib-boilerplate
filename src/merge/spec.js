// @flow

import merge from '.'

test('sum should sum 2 values', () => {
  const a = { a: 'a' }
  const b = { b: 'b' }
  const expected = { a: 'a', b: 'b' }
  expect(merge(a, b)).toEqual(expected)
})
