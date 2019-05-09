import * as fs from 'fs';

let Main = (i: string): number => {
  let input = i.split('\n').map((v) => parseInt(v, 10))
  let a = input[0]
  let b = input[1]
  let c = input[2]
  let x = input[3]
  let result = 0

  let breakCheck = (i: number, j: number): boolean => {
    return (i * j) > x
  }

  for (let i = 0; i <= a; i++) {
    if (breakCheck(500, i)) break
    for(let j = 0; j <= b; j++ ) {
      for(let k = 0; k <= c; k++ ) {
        if ((500 * i + 100 * j + 50 * k) == x) result++
      }
    }
  }

  return result
}

console.log(Main(fs.readFileSync('/dev/stdin', 'utf8')))
