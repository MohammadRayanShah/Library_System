const express=require("express");
const app=express();
const path=require("path")
const bodyparser=require("body-parser")


app.use(bodyparser.urlencoded({extended:true}));
//HTML engine set  
app.set("view engine","ejs");

//Using images,css,js and routes 
app.use("/img", express.static(path.resolve(__dirname, "images")));
app.use("/css", express.static(path.resolve(__dirname, "css")));
app.use("/js", express.static(path.resolve(__dirname, "js")));
app.use("/" ,require("./router/routes"));

//set up port
const port=process.env.PORT || 5000

app.listen(port,()=>{console.log(`listening on port localhost:${port}`)});