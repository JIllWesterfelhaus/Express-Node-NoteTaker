// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  (DATA)
// =============================================================
const newNote = [
];


// Routes
// =============================================================

// AJAX page routes


app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "notes.html"));
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Displays API JSON
app.get("/api/notes", function(req, res) {
  return db.json(notes);
});



// Request handling
//needs to add new note to db.json
app.post("/api/notes", function(req, res) {
    let newNote = req.body;
  
    newNote.routeName = newNote.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newNote);
  
    newNote.push(newNote);
  
    res.json(newNote);
  });



  

app.get("/api/notes", function(req, res) {
    notes.length = 0;
    console.log(notes);
    res.json(notes);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
