import { Main } from '../src/app'

let inputs = new Map<string, string>()
inputs.set('84', '20 2 5')
inputs.set('13', '10 1 2')
inputs.set('4554', '100 4 16')


inputs.forEach((v, k) => {
  test('basic', () => {
    expect(Main(v).toString()).toEqual(k)
  })
})

