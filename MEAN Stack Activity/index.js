const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const multer = require('multer');

const app = express();
app.use(cors());

const PORT = 5038;
const CONNECTION_STRING = "mongodb+srv://kmdacquil1:kjd@cluster0.ldg6gig.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const DATABASE_NAME = "MyDb";

let database;

app.listen(PORT, () => {
  MongoClient.connect(CONNECTION_STRING, (error, client) => {
    if (error) {
      console.error("Failed to connect to MongoDB:", error);
      return;
    }
    database = client.db(DATABASE_NAME);
    console.log("Connected to Cluster 0");
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/books/GetBooks', (req, res) => {
  database.collection("books").find({}).toArray((error, result) => {
    if (error) {
      console.error("Error fetching books:", error);
      res.status(500).json({ error: "Failed to fetch books" });
      return;
    }
    res.send(result);
  });
});

app.post('/api/books/AddBook', multer().none(), async (req, res) => {
  const numOfDocs = await database.collection("books").countDocuments();
  const { title, description, price } = req.body;
  
  try {
    await database.collection("books").insertOne({
      id: (numOfDocs + 1).toString(),
      title,
      description,
      price: parseFloat(price)
    });
    res.json("Added Successfully");
  } catch (error) {
    console.error("Error adding book:", error);
    res.status(500).json({ error: "Failed to add book" });
  }
});

app.delete('/api/books/DeleteBook', (req, res) => {
  const { id } = req.query;
  database.collection("books").deleteOne({ id }, (error, result) => {
    if (error) {
      console.error("Error deleting book:", error);
      res.status(500).json({ error: "Failed to delete book" });
      return;
    }
    res.json("Deleted Successfully");
  });
});