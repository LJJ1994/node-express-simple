const express=require('express');
const static=require('express-static');

var server=express();

server.listen(8081);

var users={
	'zhangsan':'123',
	'lisi':'456',
	'wangwu':'789'
};


server.get('/login',function(req,res){
	var user=req.query['user'];
	var pass=req.query['pass'];

	if(users[user]==null){
		res.send({ok:false,msg:'用户不存在'});
	}else if(users[user]!=pass){
		res.send({ok:false,msg:'密码错误'});
	}else{
		res.send({ok:true,msg:'登录成功'});
	}
})

server.use(static('./www'));
