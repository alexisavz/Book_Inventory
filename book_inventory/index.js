//Dependencias
//----------------------------------------------------------------------------------------
const express = require("express")
const app = express();
const dotenv = require("dotenv")
const mogoose = require("mongoose")
var cors = require("cors")
app.use(cors());


const Catalog = require("./model/catalog");
const { default: mongoose } = require("mongoose");

dotenv.config()
const bPORT = process.env.bPORT || 5000

mongoose.connect(process.env.MONGODB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => console.log('db connected'))
.catch(err => console.log(err))

app.use(express.urlencoded({extended: true}))
app.use(express.json())


//API CALLS
//----------------------------------------------------------------------------------------------------------------

//API Welcome call
app.get("/",(rec,res) =>{
    res.send("Welcome to the book API")
})

//Returns more info about API
app.get("/about",(rec,res) =>{
    res.send(`This API will be used to send, retrieve, modify, and delete data about the book catalogue <br> <br>
    These are the following functions:<br>
    GET to /books will retrieve a list of all available books on the catalogue<br>
    GET to /books/:{id} Will search for a specific book based on ID<br>
    PUT(Object) to /books will add a new book to the catalog, provided the data is added in the correct order<br>
    DELETE(ID) to /books Will find a book based on its id, when it finds one, it removes it from the catalog<br>
    PUT(Object) to /books Will search a book based on its id, and update its data with the one on the object`)
})

//Return a list of all current books
app.get("/books", async function(req, res){
    const books = await Catalog.find()
    return res.json(books);
})

//Add book to list by passing all parameters
app.post("/books", async function(req,res){
    let newBook = req.body
    console.log(req.body)
    const book = new Catalog(newBook)
    try{
        await book.save()
        res.json(newBook) 
    } catch(err){
        console.log(err)
    }

})

//Delete book based on ID
app.post("/books/delete", async function(req,res){
    let deleteId = req.body.id
    try{
        await Catalog.findByIdAndDelete(deleteId)
        res.json(`Book Deleted Correctly`)
    }catch{
        return res.send(`Book with id: ${deleteId}  was not found`)
    }
})

//Edit information for a certain book based on Id
app.put("/books", async function(req,res){
    let editBook = req.body
    let bookId = req.body.id
    delete editBook.id
    try{
        await Catalog.findByIdAndUpdate(bookId, editBook)
        return res.send(`Book Edited Correctly`)
    } catch(err){
        return res.send(`Unable to find book with id:${bookId}`)
    }
})

//Return info about specific book based on id, if not available return error message
app.get("/books/:id", async function(req, res){
    let bookId = req.params.id;
    const book = await Catalog.findById(bookId)
    if(book){
        return res.json(book)
    } else {
        return res.json({msg: "No hay libros asignados a ese ID"})
    }
})

//Listen function for the API
app.listen(bPORT, () => {
    console.log(`App listening on port ${bPORT}`)
  })

