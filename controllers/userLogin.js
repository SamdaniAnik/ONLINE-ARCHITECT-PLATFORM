var express = require('express');
var userModel = require.main.require('./model/user-model');
var router = express.Router();


router.get('/', (req, res)=>{
	res.render('userLogin/index');
});

router.post('/', (req, res)=>{
	
	var user ={
		userName : req.body.userName,
		userPassword : req.body.userPassword
	};
	
	userModel.validateuser(user, function(result){
		if(result.length > 0){
			req.session.name = req.body.userName;
			req.session.uid = result[0].id;
			res.redirect('/userHome');
		}else{
			res.render("userLogin/index");
		}
	});
});

module.exports = router;