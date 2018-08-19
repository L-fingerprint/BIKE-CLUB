var mongodb = require('./db');
function Logindb(logindb) {
    this.name = logindb.name;
    this.email =logindb.email;
    this.psd =logindb.psd;
}
module.exports =Logindb;
Logindb.findOne= function (logindb,callback){//参数，回调函数
    mongodb.open(function (err,db) {
        if(err) callback(err);
        db.collection('logindb',function (err,collection) {
            if(err){
                mongodb.close();
                return callback(err);
            }
            collection.findOne({
            $or:[{name:logindb.name},{email:logindb.name}],
                    psd:logindb.psd
                },function (err,result) {
                    mongodb.close();
                   if(result){
                       return callback(null,result);
                   }
                   callback(err);
            });
        })
    });
};

