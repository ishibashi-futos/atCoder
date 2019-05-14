import * as fs from 'fs';

export let Main = (i: string): number => {
  let [N, K] = i.split(' ').map(v => parseInt(v))
  return (N - K) + 1
}

console.log(Main(fs.readFileSync('/dev/stdin', 'utf8')))
