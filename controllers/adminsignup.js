var express = require('express');
var userModel = require.main.require('./model/user-model');
var router = express.Router();

router.get('/', (req, res)=>{
	res.render('home/newadmin');
});

router.post('/', (req, res)=>{
	
	var user ={
		uname : req.body.uname,
		password : req.body.password
	};
	userModel.insertadmin(user, function(success){
			if(success){
			res.redirect('/adminhome');
		}else{
			res.render("home/newadmin");
		}
	});
});

	

module.exports = router;