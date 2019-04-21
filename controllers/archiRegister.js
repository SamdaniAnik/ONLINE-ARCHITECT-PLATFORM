var express = require('express');
var archiModel = require.main.require('./model/archi-model');
var router = express.Router();

router.get('/', (req, res)=>{
	res.render('archiRegister/index');
});

router.post('/', (req, res)=>{
	
	var archi ={
		archiName : req.body.archiName,
		archiUsername : req.body.archiUsername,
		archiEmail : req.body.archiEmail,

		archiPassword : req.body.archiPassword,
		
		archiMobile : req.body.archiMobile,
		archiAddress : req.body.archiAddress
	};
	
	if(!archi.archiName || !archi.archiPassword || !archi.archiUsername||!archi.archiAddress|| !archi.archiEmail|| !archi.archiMobile ){
	res.render('archiRegister/index');
}else{

	archiModel.insert(archi, function(success){
		if(success){
			res.redirect('/archiLogin');
		}else{
			res.render('archiRegister/index');
		
		}
	});
}

});

module.exports = router;