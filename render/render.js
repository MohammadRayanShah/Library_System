const axios =require("axios");
exports.homeRoutes=(req,res)=>{
res.render('index');
    }

exports.books=(req,res)=>{
    //Making a get request to get data in books.ejs
axios.get("http://localhost:5000/api/books")
.then(function(response){                       //returning a promise
    res.render('books',{books:response.data});
})
 .catch(err=>{
     res.send(`Message: ${err}`)
 })
}

exports.return=(req,res)=>{
    res.render("return");
}

exports.issue=(req,res)=>{
    res.render("issue");
}

exports.index=(req,res)=>{
    res.render("index");
}
exports.add_book=(req,res)=>{
    res.render("add_book");
}
exports.update_book=(req,res)=>{
    res.render("update_book");
}