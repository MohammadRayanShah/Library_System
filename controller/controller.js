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
        name:req.body.name,
        author:req.body.author,
        pages:req.body.pages
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
Bookdb.find()
.then(book=>{
    res.send(book)
})
.catch(err=>
{
res.status(500).send({message :err.message || "Error"})
})

}

// Update a book

exports.update=(req,res)=>{
if(!req.body)
{
    return res.status(400).send({message:"Data to update cannot be empty"})
}
const id=req.params.id;
Bookdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
.then((data)=>{
    if(!data)
    {
        res.status(404).send({message:`User not found with id : ${id}`})
    }
    else{
        res.send(data);
    }
})
.catch(err=>{
    res.status(500).send({message:"Error updating the user!"})
})
}

//delete a book

exports.delete=(req,res)=>{

}