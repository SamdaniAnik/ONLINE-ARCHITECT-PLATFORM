var express = require('express');

var archiModel = require.main.require('./model/archi-model');



var router = express.Router();


router.get('/', function(request, response){
	response.render('home/archi_Post');
});

router.post('/', function(request, response){
var postinfo={
   d_title : request.body.d_title,
   h_type: request.body.h_type,
   l_size : request.body.l_size,
  f_size: request.body.f_size,
   
   no_floor: request.body.no_floor,
   no_occupant : request.body.no_occupant,
   photos : "gvygvyu",
   no_washroom: request.body.no_washroom,
  no_bedroom : request.body.no_bedroom,
   no_kitchen: request.body.no_kitchen,
   no_verandah : request.body.no_verandah,
   archiName: request.body.archiName,
    archiEmail: request.body.archiEmail

   
};



if(!postinfo.d_title  || !postinfo.h_type || !postinfo.l_size || !postinfo.f_size ||  !postinfo.no_floor|| !postinfo.no_occupant || !postinfo.no_washroom || !postinfo.no_bedroom || !postinfo.no_kitchen|| !postinfo.no_verandah){
	response.redirect('/post');
}else{
	archiModel.uploadpost(postinfo, function(status){

		if(status){
			response.redirect('/designUpload');
     /* response.send("success");*/
		}else{

			/*response.send(postinfo);*/
      response.send("Error");
		}

	});
  //response.redirect('/postpic');
}







});

module.exports = router;
