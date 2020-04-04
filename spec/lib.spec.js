const { r, o } = require('../lib')

// const fn = "function require(path) {\n    try {\n      exports.requireDepth += 1;\n      return mod.require(path);\n    } finally {\n      exports.requireDepth -= 1;\n    }\n  }"

describe('r', () => {

  it('r.toString() is not equal to require.toString()', () => {
    expect(r.toString()).not.toEqual(require.toString())
  })
  it('r is not equal to require', () => {
    // This however proves nothing on it's own, even o is not equal to require.
    expect(r).not.toEqual(require)
  })
})

describe('o', () => {
  it('o.toString() is equal to require.toString()', () => {
    expect(o.toString()).toEqual(require.toString())
  })
  it('o is not equal to require', () => {
    expect(o).not.toEqual(require)
  })
})
