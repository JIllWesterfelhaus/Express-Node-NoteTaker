// Dependencies
// =============================================================
const express = require("express");
 

// Sets up the Express App
// =============================================================
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))

//  (DATA)
// =============================================================
//create
//const newNote = [
//];
require ("./routes/htmlroutes.js")(app)
require ("./routes/apiroutes.js")(app)

// Routes
// =============================================================

// AJAX page routes


//need to read db.json and return all saved notes as json; ret
// Displays API JSON
// app.get("/api/notes", function(req, res) {
//   return db.json(notes);
// });



// // Request handling
// //needs to add new note to db.json
// app.post("/api/notes", function(req, res) {
//     let newNote = req.body;
  
//     newNote.routeName = newNote.name.replace(/\s+/g, "").toLowerCase();
  
//     console.log(newNote);
  
//     newNote.push(newNote);
  
//     res.json(newNote);
//   });



  

// app.get("/api/notes", function(req, res) {
//     notes.length = 0;
//     console.log(notes);
//     res.json(notes);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
