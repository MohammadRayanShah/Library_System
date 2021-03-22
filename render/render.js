exports.homeRoutes=(req,res)=>{
res.render('index');
    }

exports.books=(req,res)=>{
    res.render('books');
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