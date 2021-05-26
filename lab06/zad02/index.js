const express = require("express");
const app = express();
app.use(express.json());


app.get("/movies", async (req, res) => {
  client.query("SELECT * FROM movie",
  [],
  (error,results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

app.post("/movies", async (req,res) => {
  const {id,name, genre, releaseyear} = req.body;
  console.log(req.body);
  client.query("INSERT INTO movie VALUES ($1, $2, $3, $4)",
  [id,name,genre,releaseyear],
  (error,results) => {
    if (error){
      throw error;
    }
    res.sendStatus(201);
  });
});

app.put("/movies/:id", async (req,res) => {
  const { id } = req.params;
  const { name, genre, releaseyear} = req.body;
  console.log(req.params);
  console.log(req.body);
  client.query("UPDATE movie SET name = $1, genre = $2, releaseyear = $3 WHERE id = $4",
  [name,genre,releaseyear,id],
  (error,results) => {
    if (error){
      throw error;
    }
    res.sendStatus(200);
  });
});

app.get("/movies/:id", async (req,res) => {
  const { id } = req.params;
  client.query("SELECT id, name, genre, releaseyear FROM movie WHERE id = $1",
  [id],
  (error,results) => {
    if (error){
      throw error;
    }
    res.status(200).json(results.rows);
  });
});


require("dotenv").config();
const dbConnData = {
    host: process.env.PGHOST || "127.0.0.1",
    port: process.env.PGPORT || 5432,
    database: "MovieRest",
    user: "postgres",
    password: "1798"
};


const { Client} = require("pg");
const client = new Client(dbConnData);

console.log("Connection parameters: ");
console.log(dbConnData);
client
  .connect()
  .then(() => {
    console.log("Connected to PostgreSQL");
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`API server listening at http://localhost:${port}`);
    });
  })
  .catch(err => console.error("Connection error", err.stack));

