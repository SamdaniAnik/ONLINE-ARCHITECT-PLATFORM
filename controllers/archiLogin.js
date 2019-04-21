var express = require('express');
var archiModel = require.main.require('./model/archi-model');
var router = express.Router();


router.get('/', (req, res)=>{
	res.render('archiLogin/index');
});

router.post('/', (req, res)=>{
	
	var archi ={
		archiUsername : req.body.archiUsername,
		archiPassword : req.body.archiPassword
	};
	
	archiModel.validateuser(archi, function(result){
		if(result.length > 0){
			req.session.name = req.body.archiUsername;
			req.session.uid = result[0].id;
			res.redirect('archi_oHome');
			//res.render('home/archi__Home');
			
		}else{
		
			res.render("archiLogin/index");
			//res.redirect('/');
		}
	});
});

module.exports = router;