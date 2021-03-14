const mongoose=require("mongoose");
MONGO_URI="mongodb+srv://admin:<password>@cluster0.sxprh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDb= async ()=>
{
    try{
        const con=await mongoose.connect(MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true,
            useFindAndModify:false
        })
        console.log(`MongoDB connected ${con.connection.host}`);
    }
    catch(err){
console.log(err);
process.exit(1)
    }
}
module.exports=connectDb;