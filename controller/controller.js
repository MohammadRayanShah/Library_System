var Bookdb=require("../Schema/schema");

// create and save new book
exports.create=(req,res)=>{
    //validation
    if(!req.body)
    {
        res.status(400).send("Error,try again!")
        return;
    }
    //new book
    const book=new Bookdb({
        name:req.body.name
    })

    //save book in the database

    book
    .save(book)
    .then((data)=>{
res.redirect("/books");
    })
    .catch((err=>{
        res.status(500).send("error!")
    }))
}