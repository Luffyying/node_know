var count = require('./custom_counter')
console.log(count)
console.log('第一次调用模块custom_counter')
count()
// count.setOutPutVal(10)
// count.setIncrement(2)
// count.printNextCount()
// count.printNextCount()
// count.printNextCount()

//多次调用同一模块，require不会重复加载,Node.js会根据文件名缓存所有加载过的文件模块


/*
	关于module.exports和exports区别
	exports = module.exports = {}
	module是一个对象 exports仅仅是一个属性而已

	module.exports = {
		name:'lalala'
	}
	显而易见，exports对象已经有了一个属性name

	var module = new Module()
	var exports = module.exports


	example:
	define:a.js
	exports.name = 90
	module.exports = {age:123}

	require:
	var a = require(./a.js)
	console.log(a)//{age:123}

	鉴于对象的引用问题：
	var a = {}
	var b = a//此时a,b指向同一个内存地址
	a.name = 90
	b//{name:90}
	b = {like:66}//此刻b的地址已经改变了，所以a,b是两个不同的引用了
*/



