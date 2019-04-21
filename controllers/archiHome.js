var express = require('express');
var archiModel = require.main.require('./model/archi-model');
var router = express.Router();


router.get('/', (req, res)=>{
		var archi = {
			name: req.session.name
		};
		res.render('home/archi__Home', archi);
});	

module.exports = router;