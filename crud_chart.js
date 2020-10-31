const mongoose = require("mongoose")
const namesModel = require("./models/chart_schema")

let url = 'mongodb://localhost:27017/budget';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=> {
    console.log("connected to the database")
    // List all entries
    namesModel.find({}).then((data)=> {
        console.log(data)
        mongoose.connection.close();
    }).catch((connectionError)=> {
        console.log(connectionError)
    })
    
}).catch((connectionError) => {
    console.log(connectionError)
});