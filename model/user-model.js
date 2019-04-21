var db = require('./db');

module.exports={




	get: function(userId, callback){
		var sql = "select * from user where id=?";

		db.getResult(sql, [userId], function(result){
			callback(result);
		});
	},
	getAll: function(callback){
		var sql = "select * from user";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},
   
   getAllone: function(callback){
		var sql = "select * from user where status=1";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},

	getAlltrue: function(callback){
		var sql = "select * from user where status=0";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},



    insert: function(user, callback){
		var sql = "insert into user values (null,?,?,?,?,?,?,1) ";
		db.execute(sql, [user.userName, user.userPassword,user.userEmail,user.userPhone,user.userAddress,user.userDob], function(status){
			callback(status);
		});
	},

	 insertadmin: function(user, callback){
		var sql = "insert into admin values (null,?,?)";
		db.execute(sql, [user.uname, user.password], function(status){
			callback(status);
		});
	},

	/*insertuser: function(user, callback){
		var sql = "insert into user values (null, ?,?,)";
		db.execute(sql, [user.uname, user.password], function(status){
			callback(status);
		});
	},*/
	validate: function(user, callback){
		var sql = "select * from admin where username=? and password=?";

		db.getResult(sql, [user.uname, user.password], function(result){
			callback(result);
		});
	},

	validate: function(user, callback){
		var sql = "select * from admin where username=? and password=?";

		db.getResult(sql, [user.uname, user.password], function(result){
			callback(result);
		});
	},


	validateuser: function(user, callback){
		var sql = "select * from user where userName=? and userPassword=?";

		db.getResult(sql, [user.userName, user.userPassword], function(result){
			callback(result);
		});
	},
	update: function(user, callback){
		var sql = "update user set userName=?,userPassword=? where id=?";
		db.execute(sql, [user.userName, user.userPassword, user.id], function(status){
			callback(status);
		});
	},
	delete: function(userId, callback){
		var sql = "delete from user where id=?";
		db.execute(sql, [userId], function(status){
			callback(status);
		});
	},

	updatestatus: function(userId, callback){
		var sql = "update user set  status=0 where id=?";
		db.execute(sql, [userId], function(status){
			callback(status);
		});
	},

	updatestatustrue: function(userId, callback){
		var sql = "update user set  status=1 where id=?";
		db.execute(sql, [userId], function(status){
			callback(status);
		});
	}


    
}