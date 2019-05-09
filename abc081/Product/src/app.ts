import * as fs from 'fs';

let Main = (i: string): string => {
  return i.split(" ").map((v) => parseInt(v)).reduce((v, n) => v * n) % 2 == 0 ? "Even" : "Odd"
}

console.log(Main(fs.readFileSync('/dev/stdin', 'utf8')))
