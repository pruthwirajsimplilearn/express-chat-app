const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/simplilearn',{ useNewUrlParser: true }, (error)=>{
    if(!error){
        console.log("Connected Yippee..!!");
    }else{
        console.log("Error connecting to database.");
    }
});

const chat = require("./chat.model");