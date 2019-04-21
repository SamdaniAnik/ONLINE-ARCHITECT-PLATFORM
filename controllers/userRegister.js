var express = require('express');
var userModel = require.main.require('./model/user-model');
var router = express.Router();

router.get('/', (req, res)=>{
	res.render('userRegister/index');
});

router.post('/', (req, res)=>{
	
	var user ={
		userName : req.body.userName,
		userPassword : req.body.userPassword,
		userEmail : req.body.userEmail,
		userPhone : req.body.userPhone,
		userAddress : req.body.userAddress,
		userDob : req.body.userDob
	};


if(!user.userName || !user.userPassword || !user.userPhone||!user.userAddress|| !user.userEmail|| !user.userDob ){
	res.render('userRegister/index');
}else{
 		userModel.insert(user, function(success){
			if(success){
			res.redirect('/userLogin');
		}else{
			response.send('Error in adding user');
			/*res.render('userRegister/index');*/

		}
	});
}

});

module.exports = router;