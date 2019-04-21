var express = require('express');

var userModel = require.main.require('./model/user-model');
var archiModel = require.main.require('./model/archi-model');
var router = express.Router();


router.get('/', (req, res)=>{
		var user = {
			name: req.session.name
		};
		res.render('home/adminindex', user);
});	


/*router.get('/userlist', (req, res)=>{
	
	userModel.getAll(function(results){
		if(results.length > 0){
			
			var user = {
				name: req.session.name,
				uList: results
			};
			res.render('home/adminuserlist', user);
		}
	});	
});*/



router.get('/adduser', (req, res)=>{
	res.render('home/adduser');
});	

router.post('/adduser', (req, res)=>{
	
	var user ={
		userName : req.body.userName,
		userPassword : req.body.userPassword,
		userEmail : req.body.userEmail,
		userPhone : req.body.userPhone,
		userAddress : req.body.userAddress,
		userDob : req.body.userDob
	};

	
	userModel.insert(user, function(success){
			if(success){
			res.redirect('/adminhome/userlist');
		}else{
			res.render("home/adduser");
		}
	});
});


router.get('/addarchi', (req, res)=>{
	res.render('home/addarchi');
});	

router.post('/addarchi', (req, res)=>{
	
	var archi ={

		Id: req.params.id,
		archiName : req.body.archiName,
		archiUsername : req.body.archiUsername,
		archiEmail : req.body.archiEmail,

		archiPassword : req.body.archiPassword,
		
		archiMobile : req.body.archiMobile,
		archiAddress : req.body.archiAddress
	};

	
	archiModel.insert(archi, function(success){
			if(success){
			res.redirect('/adminhome/archilist');
		}else{
			res.render("home/addarchi");
		}
	});
});

router.get('/archilist', (req, res)=>{
	
	archiModel.getAllone(function(results){
		if(results.length > 0){
			
			var user = {
				name: req.session.name,
				uList: results
			};
			res.render('home/adminarchilist', user);
		}
		else
			res.send("All user is blocked");
	});	
});

router.get('/userlist', (req, res)=>{
	
	userModel.getAllone(function(results){
		if(results.length > 0){
			
			var user = {
				name: req.session.name,
				uList: results
			};
			res.render('home/adminuserlist', user);
		}
		else
			res.send("All user is blocked");
	});	
});



router.get('/edit/:id', (req, res)=>{

	userModel.get(req.params.id, function(result){
		if(result.length >0 ){
			res.render('home/adminedit', result[0]);
		}else{
			res.redirect('/adminhome/userlist');
		}
	});
});	

router.post('/edit/:id', (req, res)=>{
	
	var user ={
		id: req.params.id,
		userName : req.body.userName,
		userPassword : req.body.userPassword
	};
	
	userModel.update(user, function(success){
		if(success){
			res.redirect('/adminhome/userlist');
		}else{
			res.redirect("/adminhome/edit/"+req.parms.id);
		}
	});
});

router.get('/delete/:id', (req, res)=>{

	userModel.get(req.params.id, function(result){
		if(result.length >0 ){
			res.render('home/admindelete', result[0]);
		}else{
			res.redirect('/adminhome/userlist');
		}
	});
});	

router.post('/delete/:id', (req, res)=>{
	
	userModel.delete(req.params.id, function(success){
		if(success){
			res.redirect('/adminhome/userlist');
		}else{
			res.redirect("/adminhome/delete/"+req.params.id);
		}
	});
});

router.get('/editarchi/:id', (req, res)=>{

	archiModel.get(req.params.id, function(result){
		if(result.length >0 ){
			res.render('home/archiedit', result[0]);
		}else{
			res.redirect('/adminhome/archilist');
		}
	});
});	

router.post('/editarchi/:id', (req, res)=>{
	
	var archi ={

		Id: req.params.id,
		archiName : req.body.archiName,
		archiUsername : req.body.archiUsername,
		archiEmail : req.body.archiEmail,

		archiPassword : req.body.archiPassword,
		
		archiMobile : req.body.archiMobile,
		archiAddress : req.body.archiAddress
	};
	
	archiModel.update(archi, function(success){
		if(success){
			res.redirect('/adminhome/archilist');
		}else{
			res.redirect("/adminhome/editarchi/"+req.parms.id);
		}
	});
});


router.get('/deletearchi/:id', (req, res)=>{

	archiModel.get(req.params.id, function(result){
		if(result.length >0 ){
			res.render('home/archidelete', result[0]);
		}else{
			res.redirect('/adminhome/archilist');
		}
	});
});	

router.post('/deletearchi/:id', (req, res)=>{
	
	archiModel.delete(req.params.id, function(success){
		if(success){
			res.redirect('/adminhome/archilist');
		}else{
			res.redirect("/adminhome/deletearchi/"+req.params.id);
		}
	});
});


router.get('/blockarchi/:id', (req, res)=>{

	archiModel.get(req.params.id, function(result){
		if(result.length >0 ){
			res.render('home/blockarchi', result[0]);
		}else{
			res.redirect('/adminhome/archilist');
		}
	});
});	

router.post('/blockarchi/:id', (req, res)=>{
	
	archiModel.updatestatus(req.params.id, function(success){
		if(success){
			res.redirect('/adminhome/archilist');
		}else{
			res.redirect("/adminhome/blockarchi/"+req.params.id);
		}
	});
});

router.get('/blockedarchi', (req, res)=>{

	archiModel.getAlltrue(function(results){
		if(results.length > 0){
			
			var user = {
				name: req.session.name,
				uList: results
			};
			res.render('home/blockedarchi', user);
		}
		else{
			res.send("There is no blocked users")
		}
	});
});	

router.get('/archilist/:id', (req, res)=>{
	
	archiModel.updatestatustrue(req.params.id, function(success){
		if(success){
			res.redirect('/adminhome/archilist');
		}else{
			res.redirect("/adminhome/blockedarchi/"+req.params.id);
		}
	});
});

router.get('/signup', (req, res)=>{
	res.render('home/newadmin');
});

router.post('/signup', (req, res)=>{
	
	var user ={
		uname : req.body.uname,
		password : req.body.password
	};
	//res.send(user);
	userModel.insertadmin(user, function(success){
			if(success){
			res.redirect('/adminhome');
		}else{
			res.render("home/newadmin");
		}
	});
});

router.get('/blockuser/:id', (req, res)=>{

	userModel.get(req.params.id, function(result){
		if(result.length >0 ){
			res.render('home/blockuser', result[0]);
		}else{
			res.redirect('/adminhome/userlist');
		}
	});
});	

router.post('/blockuser/:id', (req, res)=>{
	
	userModel.updatestatus(req.params.id, function(success){
		if(success){
			res.redirect('/adminhome/userlist');
		}else{
			res.redirect("/adminhome/blockuser/"+req.params.id);
		}
	});
});

router.get('/blockeduser', (req, res)=>{

	userModel.getAlltrue(function(results){
		if(results.length > 0){
			
			var user = {
				name: req.session.name,
				uList: results
			};
			res.render('home/blockeduser', user);
		}
		else{
			res.send("There is no blocked users")
		}
	});
});	


router.get('/userlist/:id', (req, res)=>{
	
	userModel.updatestatustrue(req.params.id, function(success){
		if(success){
			res.redirect('/adminhome/userlist');
		}else{
			res.redirect("/adminhome/blockeduser/"+req.params.id);
		}
	});
});

module.exports = router;