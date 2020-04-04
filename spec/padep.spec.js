const { patch, depatch } = require('../padep')

describe('patch', () => {
  it('require is different after patch', () => {
    const expected = require.toString()
    console.log(require.toString())
    patch()
    console.log(require.toString())
    expect(require.toString()).not.toEqual(expected)
  })
})
describe('depatch', () => {
  it('depatch only doesn\'t do anything to require', () => {
    const expected = require
    depatch()
    const actual = require
    expect(actual).toEqual(expected)
  })
  it('patch depatch sets up and unsets new require', () => {
    const expected = require.toString()
    patch()
    expect(require.toString()).not.toEqual(expected)
    depatch()
    expect(require.toString()).toEqual(expected)
  })
})
