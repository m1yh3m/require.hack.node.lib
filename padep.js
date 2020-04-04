// patch depatch

const { r, o } = require('./lib')

function patch() {
  require = r
}

function depatch() {
  require = o
}

module.exports = {
  patch,
  depatch
}
