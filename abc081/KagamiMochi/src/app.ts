import * as fs from 'fs';

let Main = (i: string): number => {
  return i.split('\n').map((v) => parseInt(v)).filter((v, i) =>  i !== 0).filter((v, i, self) => self.indexOf(v) === i).length
}

console.log(Main(fs.readFileSync('/dev/stdin', 'utf8')))
