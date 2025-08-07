const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/realtime_dashboard";
const path = require('path');
if (path) {
    console.log(1)
}



const app = express();


mongoose.connect(url, {userNewParser:true})
const con = mongoose.connection
con.on('open', function(){
    console.log("Database is connected ....");
});
