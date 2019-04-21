var express 		= require('express');
var bodyParser 		= require('body-parser');
var exSession 		= require('express-session');
var cookieParser 	= require('cookie-parser');
var login			= require('./controllers/login');

var adminhome		= require('./controllers/adminhome');
var home			= require('./controllers/home');
var logout			= require('./controllers/logout');

/*var db = require('./model/db');*/

/*var expressValidator = require('express-validator');*/

var multer = require('multer');
var path = require('path');

var userRegister	= require('./controllers/userRegister');
var userLogin		= require('./controllers/userLogin');
var userHome		= require('./controllers/userHome');
var archiHome		= require('./controllers/archiHome');
var archiRegister	= require('./controllers/archiRegister');
var archiLogin		= require('./controllers/archiLogin');
var archiPost 			= require('./controllers/archiPost');

var archi_oHome 			= require('./controllers/archi_oHome');
var user_ohome 			= require('./controllers/user_ohome');
var designUpload			= require('./controllers/designUpload');
/*var archiHome 			= require('./home/archiHome');
var archi_Post 			= require('./home/archi_Post');
var photo 			= require('./home/photo');
*/


/*var logout			= require('./controllers/logout');*/
var app  			= express();
var port 			= 2000;

app.set('view engine', 'ejs');


app.use(exSession({secret: 'my top secret code', saveUninitialized: true, resave: false}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

/*app.use(bodyParser.json());
app.use(expressValidator());
app.use('/api', router);*/


app.use('/', home);

app.use('/login', login);

app.use('/adminhome', adminhome);

app.use('/logout', logout);

app.use('/userRegister', userRegister);

app.use('/userLogin', userLogin);
app.use('/userHome', userHome);
app.use('/archiHome', archiHome);
app.use('/archiRegister', archiRegister);

app.use('/archi_oHome', archi_oHome);
app.use('/user_ohome', user_ohome);

app.use('/designUpload', designUpload);
app.use('/archiLogin', archiLogin);
app.use('/post', archiPost);
app.use('/storage', express.static('storage'));




app.use('/assets', express.static('assets'));





app.get('/', (req,res)=>res.send('Index page'));
app.get('/setCookie', (req,res)=>{
	res.cookie('cookie1', 'first cookie');
	res.send("done");
});

app.get('/viewCookie', (req,res)=>{
	res.send(req.cookies['cookie1']);
});

app.get('/rmCookie', (req,res)=>{
	res.clearCookie('cookie1');
	res.send('Done');
});


//SERVER STARTUP
app.listen(port, ()=>console.log('server started at' +port+ "..."));