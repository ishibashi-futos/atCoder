import * as fs from 'fs';

let p = ['dream', 'erase', 'dreamer', 'eraser']

export let Main = (input: string): string => {
  for (let i = 0; i < 4; i++) {
    for(let j = 0; j < 4; j++) {
      for(let k = 0; k < 4; k++) {
        for(let l = 0; l < 4; l++) {
          if (input.replace(p[i], '').replace(p[j], '').replace(p[k], '').replace(p[l], '').length == 0) return 'YES'
        }
      }
    }
  } 
  return 'NO'
}

console.log(Main(fs.readFileSync('/dev/stdin', 'utf8')))
