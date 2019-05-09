import * as fs from 'fs';

let Main = (v: (number | number[])[]): number => {
  let arr: any = v[1]
  if (arr.filter((i: number) => i % 2 == 0).length == v[0]) {
    return 1 + Main([v[0], arr.map((v: number) => v / 2)])
  }
  return 0
}

let input = (input: string) => {
  const arr = input.split('\n')
  return [parseInt(arr[0]), arr[1].split(' ').map((v) => parseInt(v))]
}

console.log(Main(input(fs.readFileSync('/dev/stdin', 'utf8'))))
