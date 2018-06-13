1.创建服务

var server = express();

2.监听

server.lisetn(8080);

3.处理请求

server.use('url',function(req,res){
	
})

使用express做一个简单的前后端登录交互

效果图如下：

1.当登录账户密码正确时：

![image](https://github.com/LJJ1994/node-express-simple/blob/master/imges/1.jpg)





![image](https://github.com/LJJ1994/node-express-simple/blob/master/imges/2.jpg)

2.当密码错误，或者用户名不正确时：

![image](https://github.com/LJJ1994/node-express-simple/blob/master/imges/3.jpg)




![image](https://github.com/LJJ1994/node-express-simple/blob/master/imges/4.jpg)




