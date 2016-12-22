var express=require('express');
var session=require('client-sessions');
var bodyParser = require('body-parser');
var app=express();
//var sender=require('./sender.js');
var sql=require('./sql.js');
app.use(session({
  cookieName: 'session',
  secret: 'Vojvoda*?od?!Vince357',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
}));

app.use(function(req, res, next) {
	//if((req.url=='/login')||(req.url=='/register'))next();

  if (req.session && req.session.user) {
    sql.select('SELECT * FROM users WHERE email='+'\''+req.session.user.email+'\'', function(user) {
      if (user) {
        req.user = user;
        delete req.user.password; // delete the password from the session
        req.session.user = user;  //refresh the session value
        res.locals.user = user;
      }
      // finishing processing the middleware and run the route
      console.log('imam kolac')
      next();
    });
  } 
  else {
  	console.log('esss')
  	if((req.url!='/login')&&(req.url!='/register'))
  	{
  		res.writeHead(302,{'Location':'/login'})
		res.end();
	}
	next();
  }
});
app.listen(3030,function(req,res)
{
    console.log('Server listening on port:3030');
})
app.use(bodyParser());
app.get("/",function(req,res)
{
    res.end('Under construction');
})
app.get('/register',function(req,res)
{
    res.sendFile('views/register.html',{root:__dirname});
})
app.post('/register',function(req,res)
{
    //console.log(req.body)
    if((req.body.password==req.body.pass2)&&(req.body.password)&& req.body.email)
    {
    	sql.select('SELECT * FROM users WHERE email='+'\''+req.body.email+'\''+' AND password='+'\''+req.body.password+'\''+';',function(re)//moze biti da username i password moraju pod navodnike
    	{
    		
    		if(re.length)
    		{

	    		 res.writeHead(302,{'Location':'/register'})
	        	 res.end();
        	}
        	else
        	{

        		var obj={};obj.email=req.body.email;obj.password=req.body.password;
        		req.session.user = obj;
        		console.log(obj)
        		sql.exec('INSERT INTO users SET ?',obj,function(r)
        		{
        			console.log('create user:'+req.body.email);
        			 res.writeHead(302,{'Location':'/home'})
	        	 	 res.end();

        		});
        	}
    	})
       
    }
    else 
    	{
    		console.log('NE VALJA ')
    		res.writeHead(302,{'Location':'/register'})
    		res.end()
    	}

})
app.get("/login",function(req,res)
{
	res.sendFile('views/login.html',{root:__dirname});
})
app.post("/login",function(req,res)
{
	if((req.body.email)&&(req.body.password))
	{
		sql.select('SELECT * FROM users WHERE email='+'\''+req.body.email+'\''+' AND password='+'\''+req.body.password+'\''+';',function(r)
		{
			if(r.length)
			{
				
				req.session.user = r;
				console.log(req.session.user)
				 res.writeHead(302,{'Location':'/home'})
        		res.end();
			}
			else
			{
				res.writeHead(302,{'Location':'/login'})
        		res.end();
			}
		})
	}
})
app.get('/home',function(req,res)
{
	res.sendFile('views/index.html',{root:__dirname});
})