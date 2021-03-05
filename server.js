const express=require("express");
const app=express();


app.set('view engine','ejs');

app.get('/',(req,res)=>
{
    res.send("")
});
const port=process.env.PORT || 3000

app.listen(port,()=>{console.log(`listening on port localhost:${port}`)});