var MongoClient = require('mongodb').MongoClient
var DB_CONN_STR = 'mongodb://localhost:27017/luffydb1'

var insertData = function(db,callback){
	//connect to the table
	var collection = db.collection('users')
	console.log('i am collection:')
	console.log(collection)

	//insert
	var data = [{"name":"luffying","age":18}]
	collection.insert(data,function(err,result){
		if(err){
			console.log('Error:'+err)
		}
		callback(result)
	})
}

MongoClient.connect(DB_CONN_STR,function(err,db){
	console.log('connect successfully !')
	insertData(db,function(result){
		console.log('the result is:')
		console.log(result)
		db.close()
	})
})


//mongo 命令行shell客户端
//mongod mongodb 数据库 进程本身 ,如果结束了该进程，则mongo命令行也不起作用了,要重新启动
//version 3  vs version 2 (different grammar)