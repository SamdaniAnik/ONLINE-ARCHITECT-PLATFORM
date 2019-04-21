var express = require('express');
var mysql = require('mysql');
var multer = require('multer');
var path = require('path');
var archiModel = require.main.require('./model/archi-model');


var router = express.Router();


var storage = multer.diskStorage({
	destination: './storage/',
	filename: function(req, file, cb){
		cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname));
	}
});


var upload = multer({
	storage: storage
}).single('photos');

router.get('/', function(request, response){
	response.render('home/photo');
});

router.post('/', function(request, response){



upload(request, response, function(err){
  if(err){
    response.render('archiRegister/index');
  }else{
    console.log(request.file);
    console.log(request.file.filename);
    archiModel.getAllpost(function(status){
      var l = status.length;
      var s= status[l-1].id;
      var archi={
         photos : request.file.filename,
          id: s
      };
      /*response.send(archi);*/
      archiModel.updatepost(archi, function(status){

    		if(status){
    			response.redirect('/archi_oHome');
    		}else{
    			response.send('Error in adding pic');
    		}

    	});
     





    });

    
  }
})





});

module.exports = router;
