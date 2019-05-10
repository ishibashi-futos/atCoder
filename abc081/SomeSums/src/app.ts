import * as fs from 'fs';

let Main = (i: string): number => {
  let input = i.split(' ').map((v) => v)
  let N = Array.from({length : parseInt(input[0]) + 1}, (v, x) => x).filter((v) => v != 0).map((v) => v.toString())
  let A = parseInt(input[1])
  let B = parseInt(input[2])
  return N.map((v) => {
    let val = v.split('').map((v) => parseInt(v)).reduce((v, n) => v + n)
    return A <= val && val <= B ? parseInt(v) : 0
  }).reduce((v, x) => x += v)
}

console.log(Main(fs.readFileSync('/dev/stdin', 'utf8')))
