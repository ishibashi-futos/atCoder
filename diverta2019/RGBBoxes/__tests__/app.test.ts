import { Main } from '../src/app'

test('basic', () => {
  expect(Main('1 2 3 4')).toEqual(4)
})

test('basic', () => {
  expect(Main('13 1 4 3000')).toEqual(87058)
})
