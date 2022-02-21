const router = require('express').Router();
const { AddNote, NoteDelete, UpdateNote, isCorrect, UniqID } = require('../../lib/noteHelpers');
const { notes } = require('../../db/db');

// get route to get notes
router.get('/notes', (req, res) => {
    res.json(notes);
});

// add note by post route
router.post('/notes', (req, res) => {
    req.body.id = UniqID(notes);
    if (!isCorrect(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        const note = AddNote(req.body, notes);
        res.json(note);
    }
});

// update note by post request
router.post('/notes/:id', (req, res) => {
    req.body.id = UniqID(notes);
    if (!isCorrect(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        const note = UpdateNote(req.body, req.params.id, notes);
        res.json(note);
    }
});

// dellete route
router.delete('/notes/:id', (req, res) => {
    const note = NoteDelete(req.params.id, notes);
    res.json(note);
});

module.exports = router;