const mongoose=require("mongoose");
var schema = new mongoose.Schema({
name:{
    type:String,
    unique:true,
    required:true
},
author:{
    type:String,
    required:true
},
pages:{
    type:Number,
    required:true
}
});
const Bookdb=mongoose.model("bookdb",schema);

module.exports=Bookdb;