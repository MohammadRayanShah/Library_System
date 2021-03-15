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
    .then(data=>{
res.send(data)
    })

    .catch(err=>{
        res.status(500).send({message :err.message || "error"
    })
 })
}
//retrive all books/retrive a single book

exports.find=(req,res)=>{

}

// Update a book

exports.update=(req,res)=>{

}

//delete a book

exports.delete=(req,res)=>{

}