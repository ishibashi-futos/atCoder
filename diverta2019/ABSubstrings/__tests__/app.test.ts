import { Main } from '../src/app'

test('basic', () => {
  expect(Main("3\nABCA\nXBAZ\nBAD\n")).toEqual(2)
})

test('basic', () => {
  expect(Main("9\nBEWPVCRWH\nZZNQYIJX\nBAVREA\nPA\nHJMYITEOX\nBCJHMRMNK\nBP\nQVFABZ\nPRGKSPUNA\n")).toEqual(4)
})

test('basic', () => {
  expect(Main("7\nRABYBBE\nJOZ\nBMHQUVA\nBPA\nISU\nMCMABAOBHZ\nSZMEHMA\n")).toEqual(4)
})
