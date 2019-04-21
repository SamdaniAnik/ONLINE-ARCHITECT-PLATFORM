var express = require('express');
var archiModel = require.main.require('./model/archi-model');
var router = express.Router();

router.get('/', function(request, response){
  if(request.session.un != ""){
    console.log(request.session.un);
    archiModel.getAllpost(function(result){
    	//console.log(userList[22].photos);
      response.render('home/userhome',{userList: result});

    });
	}else{
		response.redirect('/userhome');
	}



});

module.exports = router;
