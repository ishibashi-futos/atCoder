import { Main } from '../src/app'

test('basic', () => {
  expect(Main('erasedream')).toEqual('YES')
})

test('basic', () => {
  expect(Main('dreameraser')).toEqual('YES')
})

test('basic', () => {
  expect(Main('dreamerer')).toEqual('NO')
})
