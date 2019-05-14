import { Main } from '../src/app'

test('basic', () => {
  expect(Main('3 2')).toEqual(2)
})

test('basic', () => {
  expect(Main('13 3')).toEqual(11)
})
