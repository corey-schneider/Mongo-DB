const mongoDBClient = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/mongodb_demo';

mongoDBClient.connect(url, { useUnifiedTopology: true }, (operationError, dbHandler)=> {
    if (operationError) {
        console.log("An error has occurred during the connection process");
    } else {
        console.log("Connected to the database");

        // Insert operation
         let data = {id: 10, name: "added a new name from MongoDB Native Driver"};
        // dbHandler.db('mongodb_demo').collection('names').insertOne(data, (operr, opresult)=>{
        //     if (operr) {
        //         console.log("unable to insert data into your collection");
        //     } else {
        //         console.log("insert successful");
        //         dbHandler.close();
        //     }
        // });

        // List operation
        // dbHandler.db('mongodb_demo').collection('names').find().toArray((operr, opresult)=>{
        //     if (operr) {
        //         console.log(operr);
        //     } else {
        //         for (var i = 0; i < opresult.length; i++) {
        //             console.log(opresult[i]);
        //         }
        //         dbHandler.close();
        //     }
        // });

        // Fetch operation
        // dbHandler.db('mongodb_demo').collection('names').findOne({id: 1}, (operr, opresult)=>{
        //     if (operr) {
        //         console.log(operr);
        //     } else {
        //         console.log(opresult);
        //          dbHandler.close();
        //     }
        // });

        // Update operation
        // let newData = {$set: {id: 10, name: "added a new name from MongoDB Native Driver"}};
        // dbHandler.db('mongodb_demo').collection('names').updateOne({id: 1}, newData, (operr, opresult)=>{
        //     if (operr) {
        //         console.log("unable to insert data into your collection");
        //     } else {
        //         console.log("update successful");
        //         dbHandler.close();
        //     }
        // });

        // Delete operation
        // dbHandler.db('mongodb_demo').collection('names').deleteOne({id: 11}, (operr, opresult)=>{
        //     if (operr) {
        //         console.log("unable to delete data from your collection");
        //     } else {
        //         console.log("delete successful");
        //         dbHandler.close();
        //     }
        // });

        // Bulk delete
        dbHandler.db('mongodb_demo').collection('names').deleteMany({id: 10}, (operr, opresult)=>{
            if (operr) {
                console.log("unable to delete many data from your collection");
            } else {
                console.log("deleted many successful");
                dbHandler.close();
            }
        });
    }
});