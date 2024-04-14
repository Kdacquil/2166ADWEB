var Express = require('express');
var Mongoclient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");

var app=Express();

app.use(cors());

var CONNECTION_STRING = "mongodb+srv://kmdacquil1:kjd@cluster0.ldg6gig.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
var DATABASENAME = "MyDb";

var database;

app.listen(5038, ()=> {
Mongoclient.connect(CONNECTION_STRING,(error,client)=>{
database=client.db(DATABASENAME);
console.log("Connected to Cluster 0");
})
})

app.get('/api/books/GetBooks', (req,res) => {
database.collection("books").find({}).toArray((error, result) => {
res.send(result);
})
})

app.post('/api/books/AddBook', multer().none(), async (req, res) => {
try {
const numOfDocs = await database.collection("books").countDocuments();
await database.collection("books").insertOne({
id : (numOfDocs + 1).toString(),
title : req.body.title
});
res.json("Added Successfully");
} catch (error) {
console.error("Error adding book:", error);
res.status(500).json({error : "Failed to add book"});
}
});

app.delete('/api/books/DeleteBook', (req,res) =>{
database.collection("books").deleteOne({
id:req.query.id
});
res.json("Deleted Successfully!")
})