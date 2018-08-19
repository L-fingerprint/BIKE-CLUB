var mongodb = require('./db');
function  Bike(image) {
    this.image = image.image;

}
module.exports = Bike;
Bike.findAll = function (callback) {
    mongodb.open(function (err, db) {
        if (err) return callback(err);
        db.collection('image',function (err, collection) {
            if (err) {mongodb.close(); return callback(err);}
            collection.find({}).toArray(function (err,result) {
                mongodb.close();
                if(err) return callback(err);
                return callback(null,result );
            })
        })
    })
};