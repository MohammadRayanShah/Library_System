const express=require("express");
const route =express();

route.get('/',(req,res)=>
{
    res.render('index');
});

route.get('/books.ejs',(req,res)=>
{
    res.render('books');
});

route.get("/return.ejs",(req,res)=>{
    res.render("return");
})

route.get("/issue.ejs",(req,res)=>{
    res.render("issue");
})
module.exports=route;