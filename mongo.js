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