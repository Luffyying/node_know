console.log('hello nodejs')
/*
	调用events模块，获取events.EventEmitter对象
*/
var EventEmitter =require('events').EventEmitter;
var ee = new EventEmitter();
/*
	1
	@description:EventEmitter.on(event,listener) 为事件注册一个监听
	@param {String} event 事件名
	@param {function} listener 回调函数
*/
ee.on('some_events',function(foo,bar){
	console.log('first listen event' + 'params:'+foo+' '+bar)
})
ee.on('some_events',function(foo){
	console.log('second listen event' + 'params:'+foo)
})
console.log('number one:')
ee.emit('some_events','Luffy','Miss')
console.log('number two:')
ee.emit('some_events','ying')


/*
	2
	EventEmitter.emit(event,[arg1],[arg2],[...]) 触发指定事件
	@params {String} event 事件名
	@params {String} [arg1] 可选参数
	@return {} 该事件是否有监听
*/
var isSuccess = ee.emit('some_events','Luffy','Mr')
console.log(isSuccess)
ee.on('some_events',function(foo,bar){
	console.log('第二个监听事件',foo+bar)
})
ee.emit('some_events','hi','key')

var isSuccess2 = ee.emit('other_events','Luffy','Mr')
console.log(isSuccess2)


/*
	3
	EventEmitter.once(event,listener) 为事件注册一次性监听事件，触发一次后移除监听
	@params {String} event 事件名
	@params {function} 回调函数 

*/

ee.once('once_events',function(foo,bar){
	console.log('only execute once :once_events',foo+bar)
})
ee.emit('once_events','Edward','Mr')
ee.emit('once_events','Edward','Miss')//此处代码不会执行，跳过执行后面的代码

/*
	4
	EventEmitter.removeListener(event,listener) 移除指定事件的监听器(必须是注册过的)
	第二个参数并非除成功后的回调函数

*/
var listen2 = function(foo,bar){
	console.log('listen2'+foo+bar)
}
var listen3 = function(foo,bar){
	console.log('listen3'+foo+bar)
}
ee.on('some_events',listen2)
ee.removeListener('some_events',listen2)
// ee.removeListener('some_events',listen2)
ee.emit('some_events','hi','girl')

/*
	5
    EventEmitter.removeAllListeners([event])   移除（批定事件）所有监听器
    event可以省略，则默认移除所有的事件，比较暴力的一种方法
*/

/*
	6
    EventEmitter.listeners(event)   //返回指定事件的监听数组
    参数1：event  字符串，事件名    
*/

var listener = function(foo,bar)
{
    console.log("第1个监听事件,参数foo=" + foo + ",bar="+bar );
}

var listener2= function(foo,bar)
{
    console.log("第2个监听事件,参数foo=" + foo + ",bar="+bar );
}

ee.on('some_events', listener);
ee.on('some_events', listener2);
var listenerEventsArr = ee.listeners('some_events');

console.log(listenerEventsArr.length)//具体哪个事件监听了some_events
let s = listenerEventsArr
for(var i=0;i<s.length;i++){
	console.log(s[i])
}



/*
    EventEmitter.setMaxListeners (n)   给EventEmitter设置最大监听
    参数1： n 数字类型，最大监听数
    
    超过10个监听时，不设置EventEmitter的最大监听数会提示：
    (node) warning: possible EventEmitter memory leak detected. 11 listeners added.
     Use emitter.setMaxListeners() to increase limit.
*/