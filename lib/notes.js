const fs = require('fs');
const path = require('path');

// adding note
function addNote(body, notesArray) {
    const note = body;
    notesArray.unshift(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
};

// Deleting note function
function noteDelete(paramsId, notesArray) {
    for (let i = 0; i < notesArray.length; i++) {
        if (notesArray[i].id === paramsId) {
            notesArray.splice(i, 1);
            break;
        }
    }
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return notesArray;
};

// Changing note function
function ChangeNote(body, paramsId, notesArray) {
    for (let i = 0; i < notesArray.length; i++) {
        if (notesArray[i].id === paramsId) {
            notesArray.splice(i, 1);
            break;
        }
    }
    notesArray.unshift(body);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return notesArray;
};

// validation for new notes
function IsCorrect(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
};

// export functions 
module.exports = {
    addNote,
    noteDelete,
    ChangeNote,
    IsCorrect
};