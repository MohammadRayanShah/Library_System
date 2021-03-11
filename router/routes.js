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

module.exports=route;