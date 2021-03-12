const express=require("express");
const route =express();
const services=require("../render/render")

//services.homeRoutes will handle index page with this get request in render.js
route.get('/',services.homeRoutes);

route.get('/books',services.books);

route.get("/return",services.return)

route.get("/issue",services.issue)

route.get('/index',services.index)
module.exports=route;