var mongodb = require('./db');
function Registerdb(register) {
    this.name = register.name;
    this.email =register.email;
    this.psd =register.psd;
}
module.exports =Registerdb;
Registerdb.insertOne = function(register,callback){
    mongodb.open(function(err,db){
        if(err) callback(err);
        db.collection("logindb",function(err,connection){
            if(err){
                mongodb.close();
                return callback(err);
            }
            connection.insertOne({
                name:register.name,
                email:register.email,
                psd:register.psd
            },function(err,result){
                mongodb.close();
                if(result){
                    callback(null,result);
                    return;
                }
                return callback(err)
            });
        })
    })
};