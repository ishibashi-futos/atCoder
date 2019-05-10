import * as fs from 'fs';

let Main = (i: string): number => {
  let input = i.split('\n').map((v) => v)
  let N = parseInt(input[0])
  let A = input[1].split(' ').map((v) => parseInt(v))
  let Alice: number = 0
  let Bob: number = 0
  for (let i = 0; i < N; i ++) {
    let num = 0
    switch (i % 2) {
      case 0:
        num = Math.max.apply(null, A)
        Alice += num
        break
      default:
      num = Math.max.apply(null, A)
      Bob += num
      break
    }
    A.splice(A.indexOf(num), 1)
  }
  return Alice - Bob
}

console.log(Main(fs.readFileSync('/dev/stdin', 'utf8')))
