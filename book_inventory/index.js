const express = require("express")
const app = express();

const PORT = 4000 

app.use(express.urlencoded({extended: true}))
app.use(express.json())

var books = [
    {
        id: 1,
        title: "Project Hail Mary",
        author: "Andy Weir",
        editorial: "Penguin",
        genre: "Sci-Fi"
    },
    {
        id: 2,
        title: "The Silmarillion",
        author: "J.R.R. Tolkien",
        editorial: "Harper Collins",
        genre: "Fantasy"
    },
    {
        id: 3,
        title: "Later",
        author: "Stephen King",
        editorial: "Titan Books",
        genre: "Thriller"
    },
]


//API Welcome call
app.get("/",(rec,res) =>{
    res.send("Welcome to the book API")
})

//Returns more info about API
app.get("/about",(rec,res) =>{
    res.send("Aqui Se enviara mas informacion sobre la API")
})

//Return a list of all current books
app.get("/books", function(req, res){
    return res.json(books);
})

app.post("/books", function(req,res){
    let newBook = req.body
    console.log(newBook)
    books.push(newBook)
    res.json(newBook) 
})

//Return info about specific book based on id, if not available return error message
app.get("/books/:id", function(req, res){
    let bookId = req.params.id;
    for(let i =0; i< books.length; i++){
        if(bookId == books[i].id){
            return res.json(books[i])
        }
    }
    return res.send(`No info about book ${bookId}`)
})

//Listen function for the API
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
  })

