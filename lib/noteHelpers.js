const fs = require('fs');
const path = require('path');

// add note
function AddNote(body, notesArray) {
    const note = body;
    notesArray.unshift(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}

// Delete
function NoteDelete(paramsId, notesArray) {
    for (let i = 0; i < notesArray.length; i++) {
        if (notesArray[i].id = paramsId) {
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

// Update Note
function UpdateNote(body, paramsId, notesArray) {
    for (let i = 0; i < notesArray.length; i++) {
        if (notesArray[i].id = paramsId) {
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

// Check notes by type
function isCorrect(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
};

// Get uniq id fore each adeed note
function UniqID(NoteArray) {
    return NoteArray.length;
};

module.exports = {
    AddNote,
    NoteDelete,
    UpdateNote,
    isCorrect,
    UniqID
};