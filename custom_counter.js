/*
	Node.js有很多核心模块，这些模块被编译成二进制文件，然后require()去获取,且核心模块有最高的加载优先级
*/
//创建一个自定义模块   计数器
var outputVal = 0 //输出值
var increment = 1 //增量
function setOutPutVal(val){
	outputVal = val
}

function setIncrement(incrementVal){
	increment = incrementVal
}
function printNextCount(){
	outputVal +=increment
	console.log(outputVal)
}
function printOutputVal(){
	console.log(outputVal)
}

//remember mode of node :exports / default export 用来导出模块，require 定义模块
//es6 new grammer: export default / import 
exports.setOutPutVal = setOutPutVal
exports.setIncrement = setIncrement

// module.exports.printNextCount = printNextCount
exports.printNextCount = printNextCount

console.log('--------------')
module.exports =printNextCount
console.log(module.exports)
console.log(exports)
console.log('--------------')


exports.name = 90
module.exports = {age:123}




