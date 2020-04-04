var oldRequire = require

var newRequire = function (path) {
  console.count('require')
  console.count(path)
  console.log(path)
  return oldRequire
}

module.exports = { r: newRequire, o: oldRequire }
