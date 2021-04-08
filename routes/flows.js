/*
/flows/*
*/

const express = require('express');
const router = express.Router();


//Show 'userInfo' table
router.get('/list', (req, res) => {
    res.type('text/plain')
    let sql = `SELECT * FROM userInfo;`;
    db.query(sql, (err, data, fields) => {
    if (err) throw err;
    res.json({
      status: 200,
      message: "User information retrieved.",
      data
    })
  })
})

//Make sure table is empty when server launches
router.get('/precheck', (req, res) => {
  let sql = "DROP TABLE IF EXISTS userInfo;"
  db.query(sql, (err, data, fields) => {
    if (err) throw err;
    // res.json({
    //   status: 200,
    //   message: "Table created",
    //   data
    // })
    res.redirect('/flows/init_db')
  })
})

//Create table 
router.get('/init_db', (req, res) => {
  let sql = `CREATE TABLE userInfo 
    ( id INT PRIMARY KEY, username VARCHAR(30) NOT NULL, 
      email VARCHAR(30) NOT NULL, 
      password VARCHAR(30) NOT NULL);`
  db.query(sql, (err, data, fields) => {
    if (err) throw err;
    res.redirect('/')
  })
})



//Sign-up
var ID = 0;
router.post('/new', (req, res) => {
  let sql = `INSERT INTO userInfo (id, username, email, password) VALUES (?);`;
  let values = [
  ID=ID+1,
  req.body.username,
  req.body.email,
  req.body.password
  ];
  db.query(sql, [values], (err, data, fields) => {
  if (err) throw err;
  // res.json({
  //   status: 200,
  //   message: "New user added",
  // })
  res.redirect('/');
})
})



module.exports = router;