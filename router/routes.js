const express=require("express");
const route =express();
const services=require("../render/render")
const controller=require("../controller/controller")

//services.homeRoutes will handle index page with this get request in render.js
route.get('/',services.homeRoutes);

route.get('/books',services.books);

route.get("/return",services.return)

route.get("/issue",services.issue)

route.get('/index',services.index)

//API
route.post('/api/books',controller.create);
route.get('/api/books',controller.find)
route.put('/api/books/:id',controller.update)
route.delete('/api/books/:id',controller.delete)


module.exports=route;