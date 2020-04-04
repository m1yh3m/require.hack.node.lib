const { patch, depatch } = require('../padep')
const { r, o } = require('../lib')
const { patch: exportedPatch, depatch: exportedDepatch, r: exportedR, o: exportedO } = require('../index')

describe('exported patch', () => {
  it('exported patch is equal to patch from padep', () => {
    expect(exportedPatch).toEqual(patch)
  })
})
describe('exported depatch', () => {
  it('exported depatch is equal to depatch from padep', () => {
    expect(exportedDepatch).toEqual(depatch)
  })
})
describe('exported r', () => {
  it('exported r is equal to r from lib', () => {
    expect(exportedR).toEqual(r)
  })
})
describe('exported o', () => {
  it('exported o is equal to o from lib', () => {
    expect(exportedO).toEqual(o)
  })
})
