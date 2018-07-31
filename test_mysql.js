var mysql = require('mysql')
console.log(mysql)

//create one connect
var connection = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:'qiannian626',
	port:'3306',
	database:'test'
})
connection.connect(function(err){
	if(err){
		//如果是连接断开则，自动重新连接
		// if(err.code =='PROTOCOL_CONNECTION_LOST'){
		// 	connect()
		// }
		console.log('[query]-:'+err)
		return
	}
	console.log('[connection connect] successd!')
})

//execute the sql


//1)add data
var userAddSql = "INSERT INTO user(id,name,age) VALUES(3,'ying',19)"
// connection.query(userAddSql,function(err,result){
// 	if(err){
// 		console.log('[query]-'+err)
// 		return
// 	}
// 	console.log('------insert data following here:')
// 	console.log(result)
// })
//2)search
connection.query('select * from user',function(err,rows,fields){
	if(err){
		console.log('[query]-'+err)
		return
	}
	console.log('The solution is:',rows)
})

//3)delete
// var userDelSql = 'DELETE FROM user'
// connection.query(userDelSql,function(){
// 	if(err){
// 		console.log('[DELETE ERROR]-'+err.message)
// 		return
// 	}
// 	console.log('DELETE affectedRows:',result.affectedRows)
// })

//4)结束连接
//end() destory()较为暴力
// setTimeout(function(){
// 	connection.end()
// 	console.log('the database has closed')
// },2000)


//5)连接池集群 遗留



