const mongoose = require("mongoose")
const namesModel = require("./models/names_schema")

let url = 'mongodb://localhost:27017/mongodb_demo';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=> {
    console.log("connected to the database")
    // List all entries
    // namesModel.find({}).then((data)=> {
    //     console.log(data)
    //     mongoose.connection.close();
    // }).catch((connectionError)=> {
    //     console.log(connectionError)
    // })

    //Fetch one document
    // namesModel.findById("5f9c5a49f25474caa06c1257").then((data)=> {
    //     console.log(data)
    //     mongoose.connection.close();
    // }).catch((connectionError)=> {
    //     console.log(connectionError)
    // })

    // let newData = {$set: {id: 10, name: "Updated Content"}};
    // namesModel.update({id:10}, newData).then((data)=> {
    //     console.log(data)
    //     mongoose.connection.close();
    // }).catch((connectionError)=> {
    //     console.log(connectionError)
    // })

    // namesModel.remove({id:10}).then((data)=> {
    //     console.log(data)
    //     mongoose.connection.close();
    // }).catch((connectionError)=> {
    //     console.log(connectionError)
    // })

    namesModel.remove({id:10}).then((data)=> {
        console.log(data)
        mongoose.connection.close();
    }).catch((connectionError)=> {
        console.log(connectionError)
    })
    
}).catch((connectionError) => {
    console.log(connectionError)
});