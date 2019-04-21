var db = require('./db');

module.exports={



   get: function(userId, callback){
		var sql = "select * from archi where Id=?";

		db.getResult(sql, [userId], function(result){
			callback(result);
		});
	},

    getAll: function(callback){
		var sql = "select * from archi";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},

     getAllone: function(callback){
		var sql = "select * from archi where status=1";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},

    getAlltrue: function(callback){
		var sql = "select * from archi where status=0";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},

    insert: function(archi, callback){
		var sql = "insert into archi values (null,?,?,?,?,?,?,1)";
		db.execute(sql, [archi.archiName,archi.archiUsername, archi.archiEmail,archi.archiPassword,archi.archiMobile,archi.archiAddress], function(status){
			callback(status);
		});
	},
	
	 validate: function(archi, callback){
		var sql = "select * from admin where Username=? and password=?";

		db.getResult(sql, [archi.archiUsername, archi.archipassword], function(result){
			callback(result);
		});
	},
	validateuser: function(archi, callback){
		var sql = "select * from archi where Username=? and Password=?";

		db.getResult(sql, [archi.archiUsername, archi.archiPassword], function(result){
			callback(result);
		});
	},


	update: function(archi, callback){
		var sql = "update archi set Name=? , Username=?, Email=? ,Password=? , Mobile=?, Address=? where Id=?";
		db.execute(sql, [archi.archiName,archi.archiUsername,archi.archiEmail, archi.archiPassword, archi.archiMobile,archi.archiAddress,archi.Id], function(status){
			callback(status);
		});
	},


	getAllpost: function(callback){
		var sql = "SELECT * FROM design";
		db.getResult(sql, [], function(result){
			callback(result);
		});
	},


	/*getAllpost: function(callback){
		var sql = "SELECT t1.* ,t2.Name,t2.Email FROM design t1, archi t2 where t1.id=t2.id";
		db.getResult(sql, [], function(result){
			callback(result);
		});
	},*/


uploadpost: function(design, callback){
		var sql = "INSERT INTO design values(null, ?, ?,?,?,?,?,?,?,?,?,?,?,?)";
		db.execute(sql, [design.d_title, design.h_type, design.l_size, design.f_size, design.no_floor, design.no_occupant,  design.no_washroom ,design.no_bedroom, design.no_kitchen,design.no_verandah, design.photos,design.archiName,design.archiEmail], function(success){
		/*console.log(design);*/
			callback(success);
		});
	},




/*updatepost: function(user, callback){
	//	var sql = "SELECT * from uploadpost";
	//	db.execute(sql, [user.photos, user.id], function(status){
			//callback(status);

		var sql = "UPDATE design set photos=? where id=?";

		db.execute(sql, [user.photos, user.id], function(status){
			callback(status);
		});
		//callback(status)
		//});
	}
*/
delete: function(userId, callback){
		var sql = "delete from archi where Id=?";
		db.execute(sql, [userId], function(status){
			callback(status);
		});
	},

updatepost: function(design, callback){
	//	var sql = "SELECT * from uploadpost";
	//	db.execute(sql, [user.photos, user.id], function(status){
			//callback(status);

		var sql = "UPDATE design set photos=? where id=?";

		db.execute(sql, [design.photos, design.id], function(status){
			//console.log(design.photos);
			console.log(design.id);
			callback(status);
		});
		//callback(status)
		//});
	},

	updatestatus: function(Id, callback){
		var sql = "update archi set  status=0 where Id=?";
		db.execute(sql, [Id], function(status){
			callback(status);
		});
	},

	updatestatustrue: function(Id, callback){
		var sql = "update archi set  status=1 where Id=?";
		db.execute(sql, [Id], function(status){
			callback(status);
		});
	}





}