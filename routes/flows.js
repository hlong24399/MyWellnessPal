/*
/flows/*
*/

const express = require('express');
const router = express.Router();

router.get('/inflow', (req, res) => {
    res.type('text/plain')
    res.send('hello there, this is inside flow routes.')
    let sql = `SELECT * FROM BOOKS WHERE price > 20;`;
    db.query(sql, (err, data, fields) => {
    if (err) throw err;
    res.json({
      status: 200,
      message: "BOOKS lists retrieved successfully",
      data
    })
  })
})


module.exports = router;