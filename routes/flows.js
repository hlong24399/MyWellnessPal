/*
/flows/*
*/

const express = require('express');
const router = express.Router();

router.get('/inflow', (req, res) => {
    res.type('text/plain')
    res.send('hello there, this is inside flow routes.')
})



module.exports = router;