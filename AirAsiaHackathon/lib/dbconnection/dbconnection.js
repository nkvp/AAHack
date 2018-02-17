const MongoClient = require('mongodb').MongoClient
const dbConnUrl = 'mongodb://aahack:aahack@ds239638.mlab.com:39638/aahack';
var db;

module.exports = {
    connectToDB: function (startServer){

        MongoClient.connect(dbConnUrl, function (err, client) {
            if (err) {
                console.log("Error: " + err);
                return false;
            }
            else {
                db = client.db('aahack')
                startServer();
                return true;
            }
        })
    },
    saveBooking : function(booking){
        console.log(db);
        console.log(booking);
        db.collection('booking').save(booking, function(err, result) {
            if(err){
                console.log("Unable to save booking");
            }
        });
    }
}
