const mongoose = require('mongoose');
const config = require('config');

const dbgr = require('debug')('development:mongoose');

mongoose
.connect(`${config.get("MONGODB_URI")}/scatch`)
.then(function(){
    console.log("Connected successfull");
})
.catch(function(err){
    console.log(err)
})

module.exports = mongoose.connection;