import * as fs from 'fs';

export let Main = (i: string): number => {
  let N = 0
  let [prefixB, suffixA] = [0, 0]
  let f = (s: string) => {
    if(s.startsWith('B')) prefixB++
    if(s.endsWith('A')) suffixA++
  }
  let r = i.split('\n').map((v, i) => {
    if (i == 0) {
      N = parseInt(v)
      return 0
    }
    f(v)
    return (v.match('AB') || []).length
  }).reduce((v, n) => n+v)
  r += (suffixA < prefixB ? suffixA : prefixB)
  return r
}

console.log(Main(fs.readFileSync('/dev/stdin', 'utf8')))
