// 使用exports
exports.hello = require('./hello');
exports.bye = require('./bye');
// 使用module.exports
module.exports = {
  hello: require('./hello'),
  bye: require('./bye')
}