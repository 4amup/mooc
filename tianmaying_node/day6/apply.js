// 利用apply实现log的包装
function log() {
  console.log.apply(this, arguments)
}

log('a', 'b', 'c', 'd');