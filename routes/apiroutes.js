var dbjson = require ("../db notes/db.json")
var fs = require ("fs")
var uuid = require ("uuid")
module.exports = function(app)  {
    app.get("/api/notes", function (req, res) {
    res.send(dbjson);
    })  
    app.post("/api/notes", function (req, res) {
        let noteId = uuid()
        let newNote = { 
            id: noteId,
            title: req.body.title,
            text:  req.body.text
        }
        fs.readFile("./db notes/db.json","utf8", (err,data) => {
            if (err) throw err
            const allNotes = JSON.parse(data)
            allNotes.push(newNote)
        fs.writeFile("./db notes/db.json",JSON.stringify(allNotes, null, 2), err => {
            if (err) throw err
            res.send(dbjson)
            console.log("Note Created")
        })

        })

    }
    
    
    )


}
