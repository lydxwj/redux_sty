// 引入mockjs
const Mock = require('mockjs');
const Random = Mock.Random;
const productData = function() {
  let Data = [];
  for (let i = 0; i < 10; i++) {
    let data = {
      name: Random.cname(),
      id: Random.increment()
    }
    Data.push(data)
  }
 
  return {
    Data: Data
  }
}
 
Mock.mock('http://baidu.com/get/list', 'post', productData );