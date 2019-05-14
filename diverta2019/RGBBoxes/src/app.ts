import * as fs from 'fs';

export let Main = (i: string): number => {
  let [R, G, B, N] = i.split(' ').map(v => parseInt(v))
  let c = 0

  // 参考：https://atcoder.jp/contests/diverta2019/submissions/5376397
  // todo: 以下のループの原理をチェック
  for (let r = 0; r <= N ;r += R) {
    for (let g = 0; r + g <= N; g += G) {
      if ((N-r-g)%B == 0) c++
    }
  }

  return c
}

console.log(Main(fs.readFileSync('/dev/stdin', 'utf8')))
